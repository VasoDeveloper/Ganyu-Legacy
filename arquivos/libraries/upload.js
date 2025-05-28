const { fromBuffer } = require('file-type');
const fetch = require('node-fetch');
const axios = require('axios');
const Crypto = require("crypto");
const fs = require("fs");
const { ImageUploadService } = require('node-upload-images');

class Upload {
    
    static async catbox(media) {
        const type = await fromBuffer(media);
        const form = new FormData();
        form.append('reqtype', 'fileupload'); // Tipo de upload retornado na POST.
        form.append('fileToUpload', media, 'tmp.' + type.ext); // Arquivo que você deseja transformar em URL (qualquer tipo).
        
        fetch('https://catbox.moe/user/api.php', {
            method: 'POST',
            body: form
        }).then(async(res) => {
            const response = await res.text();
            return Promise.resolve({
                status: 'Online',
                url: response.trim(),
                statusCode: 200
            });
        }).catch((error) => {
            return Promise.reject({
                status: 'Offline',
                error: error,
                statusCode: 500            
            })
        });
    };
    
    static async cloudinary(buffer) {
        const type = await fromBuffer(buffer); 
        if (!type) Promise.reject("Não foi possível determinar o tipo do arquivo.");

        const form = new FormData();
        form.append('file', buffer, { filename: `file.${type.ext}`, contentType: type.mime })
        form.append('upload_preset', 'kazuma_sato_bot');
        form.append('resource_type', type.ext === 'mp4' ? 'video' : 'image')
        
        axios.post(`https://api.cloudinary.com/v1_1/dnsbuvtnc/upload`, form, {
            headers: {
                ...form.getHeaders()
            }
        }).then((response) => {
            if (response.data && response.data.secure_url) {
                return Promise.resolve({
                    status: 'Online',
                    resultado: response.data,
                    statusCode: 200                
                });
            } else {
                return Promise.reject({
                    status: 'Error', 
                    message: 'Sem uma resposta positiva sobre o upload!',
                    statusCode: 500
                })
            }
        }).catch((error) => {
            return Promise.reject({
                status: 'Offline', 
                message: error.response ? error.response.data : error.message,
                statusCode: 404
            })
        })
    }
    
    static async pixhost(buffer) {
        return new Promise(async(resolve, reject) => {
            try {
               let resposta = {};
               const service = new ImageUploadService('pixhost.to');
               await service.uploadFromBinary(buffer, Crypto.randomBytes(10).toString('hex') + ".png")
               .then(({ directLink }) => {
                  resposta.resultado = directLink;
                  resolve(resposta);
               }).catch((error)=>{
                  resposta.erro = "Houve um erro no upload da imagem.";
                  reject(resposta);
               })
            } catch(err) {
                reject({erro: "Houve um erro no upload da imagem."})
            }
        })
    }
    
    static async imgur(media) {
        return new Promise(async(resolve, reject) => {
           try {
              const convert64 = media.toString('base64');
              const response = await axios.post('https://api.imgur.com/3/image', {
                 image: convert64, 
                 type: 'base64'
              }, {
                headers: { 
                   'Authorization': 'Client-ID b3db908dbe6a8a1'
                }
              });
              if (response.data && response.data.data && response.data.data.link) {
                resolve(response.data.data.link);
              } else {
                reject(response.data);
              }
           } catch (erro) {
              reject('Erro no upload: ' + erro.message);
           }
        });
    }
            
}

module.exports = Upload;