const fs = require('fs');
const { tmpdir } = require("os");
const Crypto = require("crypto");
const ff = require('fluent-ffmpeg')
const WebP = require("node-webpmux");
const path = require("path");

class StickerData {

  static async imageToWebp(media) {
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)
    fs.writeFileSync(tmpFileIn, media)
        await new Promise((resolve, reject) => {
          ff(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
            .toFormat("webp")
            .save(tmpFileOut)
    });
    
    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

 static async videoToWebp (media) {
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)
    fs.writeFileSync(tmpFileIn, media)
        await new Promise((resolve, reject) => {
          ff(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", "0", "-ss", "00:00:00", "-t","00:00:05", "-preset", "default", "-an", "-vsync", "0"])
            .toFormat("webp")
            .save(tmpFileOut)
    })

    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

  static async writeExifImg(media, metadata) {
    let wMedia = await this.imageToWebp(media)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)

    if (metadata.id || metadata.pack || metadata.author || metadata.emojis) {
        const img = new WebP.Image()
        const stickerInfo = {"sticker-pack-id": metadata.id || "Ganyu Legacy", "sticker-pack-name": metadata.pack || "", "sticker-pack-publisher": metadata.author || "", "emojis": metadata.emojis ? metadata.emojis : ["🤠"]};
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(stickerInfo), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

  static async writeExifVid(media, metadata) {
    let wMedia = await this.videoToWebp(media)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)

    if (metadata.id || metadata.pack || metadata.author || metadata.emojis) {
        const img = new WebP.Image()
        const stickerInfo = {"sticker-pack-id": metadata.id || "Ganyu Legacy", "sticker-pack-name": metadata.pack, "sticker-pack-publisher": metadata.author, "emojis": metadata.emojis ? metadata.emojis : ["🤠"]}
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(stickerInfo), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

  static async writeExif(media, metadata) {
    let wMedia = /webp/.test(media.mimetype) ? media.data : /image/.test(media.mimetype) ? await this.imageToWebp(media.data) : /video/.test(media.mimetype) ? await this.videoToWebp(media.data) : ""
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)

    if (metadata.id || metadata.pack || metadata.author || metadata.emojis) {
        const img = new WebP.Image();
        const stickerInfo = {"sticker-pack-id": metadata.id || "Ganyu Legacy", "sticker-pack-name": metadata.pack, "sticker-pack-publisher": metadata.author, "emojis": metadata.emojis ? metadata.emojis : ["🤠"]}
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(stickerInfo), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

  static async imageToWebp2(media) {
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`);
    fs.writeFileSync(tmpFileIn, media);
    await new Promise((resolve, reject) => {
        ff(tmpFileIn)
         .on("error", reject)
         .on("end", () => resolve(true))
         .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(9999999,iw)':min'(9999999,ih)':force_original_aspect_ratio=decrease,fps=15, pad=0:0:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
         .toFormat("webp")
         .save(tmpFileOut);
      });
      const buff = fs.readFileSync(tmpFileOut);
      fs.unlinkSync(tmpFileOut);
      fs.unlinkSync(tmpFileIn);
        return buff;
}

  static async videoToWebp2(media) {
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`);
    fs.writeFileSync(tmpFileIn, media);
    await new Promise((resolve, reject) => {
      ff(tmpFileIn)
       .on("error", reject)
       .on("end", () => resolve(true))
       .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale=220:220,fps=12,pad=0:0:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse"])
       .toFormat("webp")
       .save(tmpFileOut);
     });
     const buff = fs.readFileSync(tmpFileOut);
     fs.unlinkSync(tmpFileOut);
     fs.unlinkSync(tmpFileIn);
        return buff;
}

  static async writeExifImg2(media, metadata) {
    let wMedia = await this.imageToWebp2(media)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)
    
    if (metadata.id || metadata.pack || metadata.author || metadata.emojis) {
        const img = new WebP.Image();
        const stickerInfo = {"sticker-pack-id": metadata.id || "Ganyu Legacy", "sticker-pack-name": metadata.pack || "", "sticker-pack-publisher": metadata.author || "", "emojis": metadata.emojis ? metadata.emojis : ["🤠"]};
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(stickerInfo), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

  static async writeExifVid2(media, metadata) {
    let wMedia = await this.videoToWebp2(media)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)

    if (metadata.id || metadata.pack || metadata.author || metadata.emojis) {
        const img = new WebP.Image();
        const stickerInfo = {"sticker-pack-id": metadata.id || "Ganyu Legacy", "sticker-pack-name": metadata.pack || "", "sticker-pack-publisher": metadata.author || "", "emojis": metadata.emojis ? metadata.emojis : ["🤠"]};
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(stickerInfo), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

  static async writeExif2(media, metadata) {
    let wMedia = /webp/.test(media.mimetype) ? media.data : /image/.test(media.mimetype) ? await this.imageToWebp2(media.data) : /video/.test(media.mimetype) ? await this.videoToWebp2(media.data) : "";
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)

    if (metadata.id || metadata.pack || metadata.author || metadata.emojis) {
        const img = new WebP.Image();
        const stickerInfo = {"sticker-pack-id": metadata.id || "Ganyu Legacy", "sticker-pack-name": metadata.pack || "", "sticker-pack-publisher": metadata.author || "", "emojis": metadata.emojis ? metadata.emojis : ["🤠"]};
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(stickerInfo), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

}

module.exports = new Object({
    imageToWebp: (media) => StickerData.imageToWebp(media),
    imageToWebp2: (media) => StickerData.imageToWebp2(media),
    videoToWebp: (media) => StickerData.videoToWebp(media),
    videoToWebp2: (media) => StickerData.videoToWebp2(media),
    writeExifImg: (media, metadata) => StickerData.writeExifImg(media, metadata),
    writeExifImg2: (media, metadata) => StickerData.writeExifImg2(media, metadata),
    writeExifVid: (media, metadata) => StickerData.writeExifVid(media, metadata),
    writeExifVid2: (media, metadata) => StickerData.writeExifVid2(media, metadata),
    writeExif: (media, metadata) => StickerData.writeExif(media, metadata),
    writeExif2: (media, metadata) => StickerData.writeExif2(media, metadata)
 });