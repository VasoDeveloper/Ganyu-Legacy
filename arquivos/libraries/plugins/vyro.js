/* 
    ❓️ Função: Enhance | Recolor | Dehaze
    📃 Descrição: Aumentar a qualidade da imagem (Enhance), Desembaçar a imagem (Dehaze) e Recolorir a imagem (Recolor) através de uma inteligência artificial.
    🔧 WhatsApp: +55 82 8827-9194
*/

const FormData = require("form-data");
const Jimp = require("jimp"); 

const setClass = new Object({
    operation: "", // enhance | recolor | dehaze
    media: "" // Buffer | Somente imagens!
});

class VyroEngine {   
    constructor(config = {}) {
      const { operation, media } = { ...setClass, ...config };
      this.operation = operation || "";
      this.media = media || "";
   }
   
  start(image = this.media, operation = this.operation) {
   let config = () => Promise.reject('Error.'); // Se caso não for configurado
   if(!operation) return Promise.reject("Faltando definir a operação.");
   if(!image) return Promise.reject("Sem Mídia.")
   return new Promise(async(resolve, reject) => {
    const type = ["enhance", "recolor", "dehaze"];
      if (type.includes(operation)) {
        operation = operation;
      } else {
        operation = availableOperations[0];
      }
      const formData = new FormData();
        formData.append("image", Buffer.from(image), {
          filename: "enhance_image_body.jpg",
          contentType: "image/jpeg",
         });
        formData.append("model_version", 1, {
          "Content-Transfer-Encoding": "binary",
          "contentType": "multipart/form-data; charset=utf-8"
        });
        formData.submit({
           url: "https://inferenceengine.vyro.ai/" + operation + ".vyro",
           host: "inferenceengine.vyro.ai",
           path: "/" + operation,
           protocol: "https:",
           headers: {
              "User-Agent": "okhttp/4.9.3",
              "Connection": "Keep-Alive",
              "Accept-Encoding": "gzip",
           },
        }, function(err, res) {
            if (err) reject(err);
            const chunks = [];
            res.on("data", function(chunk) {
            chunks.push(chunk);
        });
            res.on("end", function() {
              resolve(Buffer.concat(chunks));
        });
            res.on("error", function(err) {
              reject(err);
        });
     });
   });
  }
   
}

module.exports = VyroEngine;