/* ======== [ APIs - WebP ] ============ */
const axios = require('axios');
const cheerio = require('cheerio');
const util = require('util');
const FormData = require('form-data');
const fs = require('fs');

async function uploadFile(buff) {
 return new Promise (async(resolve, reject) => {
    const form = new FormData();
    form.append("files[]", fs.createReadStream(buff))
    await axios({
        url: "https://uguu.se/upload.php", 
        method: "POST", 
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36", 
            ...form.getHeaders()
        }, 
        data: form
    }).then((data) => {
        resolve(data.data.files[0])
    }).catch((err) => reject(err))
 })
}

async function WebP_GIF(filee) {    
  return new Promise(async(resolve, reject) => {
    const bodyForm = new FormData();
    let anu = await uploadFile(filee)
      bodyForm.append('new-image-url', util.format(anu.url));
      bodyForm.append('upload', 'Upload!');
        axios({
            method: 'post', 
            url: 'https://ezgif.com/webp-to-mp4', 
            data: bodyForm, 
            headers: {
                'Content-Type': `multipart/form-data; boundary=${bodyForm._boundary}`,
                'Cookie': '_pbjs_userid_consent_data=6683316680106290; connectId={"ttl":86400000,"lastUsed":1708365622652,"lastSynced":1708365622652}; __gads=ID=b734e9cba4301413:T=1708365615:RT=1708365615:S=ALNI_MbJUB1DF14qGutQavSd3eA_zLMFVw; __gpi=UID=00000a0e5809b49d:T=1708365615:RT=1708365615:S=ALNI_MaAGDVdFDZTEpfWkfEm4zIpFyvHzA; __eoi=ID=d2a1d09449eba246:T=1708365615:RT=1708365615:S=AA-AfjY9hvxmgSapnDI6dI3Bsi_t; _cc_id=1d6889febdcde3132da40a14ad2cb8e3; panoramaId_expiry=1708452021343; cto_bidid=LZPLrV9mMjV2Tlh2eFd5cjl6TldnR2IxTnh1UzZRNVpTVGhUYnpjSU9qaDlOZlRRUVhCdG51b0ZxNjJZemVLdEUzT0Z1QWxua09EWEJSeSUyRkdBalpUd0M2VHRhVjU0RzB6SFdqeWhpNkwwQlc0VURFJTNE; cto_bundle=O1ab3l9TYloxR05zcW9KS2hRQTg0blpPTUI1eGR3REhVM1F4QUpmNlVFcyUyRmR6ZVh3MkFwTlpoTEdtNHclMkJCR2tMczBoJTJCaHRUSCUyRlZvbnplamdTSzE5TllMQjJ2em5mT1R4b2tpS2Zub0xZaDklMkZRdkFISGN3JTJCa3NnVzFqT1Y4Z0VOYW9Sc3lsUHZIN2glMkZGY1kyMzNhZG9rJTJGZGN3JTNEJTNE', 
                'Host': 'ezgif.com', 
                'Origin': 'https://ezgif.com', 
                'Referer': 'https://ezgif.com/webp-to-mp4', 
                'Sec-Fetch-Dest': 'document', 
                'Sec-Fetch-Mode': 'navigate', 
                'Sec-Fetch-Site': 'same-origin', 
                'Sec-Fetch-User': '?1', 
                'Sec-GPC': '1', 
                'Upgrade-Insecure-Requests': '1', 
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
            }
        }).then(({ data }) => {
           const bodyFormThen = new FormData()
           const $ = cheerio.load(data)
           const file = $('form.ajax-form input[name="file"]').attr('value')
           const convert = 'Convert WebP to MP4!'
           const gotdata = {
               file: file, 
               convert: convert
           }
           bodyFormThen.append('file', gotdata.file)
           bodyFormThen.append('convert', gotdata.convert)
           axios({
              method: 'post', 
              url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file, 
              data: bodyFormThen,
              headers: {
                'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
              }
           }).then(({ data }) => {
            const $ = cheerio.load(data)
            resolve({
               status: "Online",
               criador: "Sabrina-BOT © 2024",
               resultado:  'https:' + $('div#output > p.outfile > video > source').attr('src'),
               statusCode: 200
            })
        }).catch(reject)
      }).catch(reject);
   });
}

module.exports = WebP_GIF;