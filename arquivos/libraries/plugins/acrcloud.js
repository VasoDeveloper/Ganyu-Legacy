/* 
    ❓️ Função: ACRCloud (Shazam)
    📃 Descrição: Reconhecer músicas através de áudios, similar ao Shazam. 
    🏷 Desenvolvedor: Victor Gabriel 
    🔧 WhatsApp: +55 82 8827-9194
*/

const fs = require('fs-extra');
const acrcloud = require('acrcloud');
const FileType = require('file-type');
const ffmpeg = require('fluent-ffmpeg');
const duration = require('format-duration-time');
const crypto = require('crypto');

const setClass = new Object({
    host: "identify-us-west-2.acrcloud.com/",
    access_key: "5fa558ba9eebbab70db053014f283431",
    access_secret: "4zblfTHO0JNtvRVggdamzuvABy9TKN9FPjyz0f3w"
});

class RecognitionMusic {

   constructor(config = {}) {
      const { buffer, host, access_key, access_secret } = { ...setClass, ...config };
      this.host = host || "";
      this.access_key = access_key || "";
      this.access_secret = access_secret || "";
   }

   async start(bufferMidia) {
      let config = () => Promise.reject('Error.'); // Se caso não for configurado
      try {
         let bufferAudio;
         const mimetype = await FileType.fromBuffer(bufferMidia);
         if (!this.host || !this.access_key || !this.access_secret) throw new Error('Sem configuração! Verifique a função.');

         const acr = new acrcloud({ host: this.host.trim(), access_key: this.access_key.trim(), access_secret: this.access_secret.trim() });

         if (mimetype.mime.startsWith('audio')) {
            bufferAudio = bufferMidia;
         } else throw new Error('Este tipo de mídia não é compatível.');

         const result = await acr.identify(bufferAudio);
         const { status, metadata } = result;
         if (status.code === 1001) {
            return Promise.resolve({message: 'Não foi encontrada uma música compatível.'});
         } else if (status.code === 3003 || status.code === 3015) {
            return Promise.resolve({message: 'Você excedeu o limite do ACRCloud, crie uma nova chave no site.'});
         } else if(status.code === 3016) {
            return Promise.resolve({message: 'A duração da música que você enviou é muito longa! Sugerimos que você corte um arquivo grande em um menor, de 10-20s do áudio são suficientes para identificar.'});     
         } else if (status.code === 3000) {
            return Promise.resolve({message: 'Houve um erro no servidor do ACRCloud, tente novamente mais tarde' });
         } else {
            const releaseDate = metadata.music[0].release_date.split("-");
            return Promise.resolve({
               job: metadata.music[0].acrid,
               similarity: metadata.music[0].score + "%",
               producer: metadata.music[0].label || "Sabrina-BOT ©",
               duration: duration.default(metadata.music[0].duration_ms).format("mm:ss"),
               genres: metadata.music[0].genres.map(genres => genres.name),
               launch: `${releaseDate[2]}/${releaseDate[1]}/${releaseDate[0]}`,
               album_name: metadata.music[0].album.name || "Sabrina-BOT ©",
               music: metadata.music[0].title,
               artists_name: metadata.music[0].artists.map(artists => artists.name).join(', ')
            });
         }
      } catch (err) {
         return Promise.resolve({message: 'Erro na conexão com a API ACRCloud ou sua chave ainda não está configurada para usar.'});
      }
   }
   
}

module.exports = RecognitionMusic;