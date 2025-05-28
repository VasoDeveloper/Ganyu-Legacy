/* Requerindo módulos */
const qs = require("querystring");
const axios = require("axios");
const Crypto = require("crypto");
const FormData = require("form-data")

const removerFundo = (bufferImagem) => {
  return new Promise(async(resolve,reject) => {
   try {
    let resposta = {};
    let nomeArquivo = Crypto.randomBytes(10).toString('hex') + ".png";
    let data = new FormData();
    data.append('files', bufferImagem, {filename: nomeArquivo})
    let respostaUpload = await axios.request({
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://download1.imageonline.co/ajax_upload_file.php',
        headers: { 
            'User-Agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0', 
            'Accept': ' */*', 
            'Origin': ' https://imageonline.co', 
            'Connection': ' keep-alive', 
            'Referer': ' https://imageonline.co/', 
            'Sec-Fetch-Dest': ' empty', 
            'Sec-Fetch-Mode': ' cors', 
            'Sec-Fetch-Site': ' same-site', 
            ...data.getHeaders()
        },
        data: data
    }).catch(() => {
        resposta.erro = `Erro no servidor de upload.`; 
        reject(resposta)
    })

    let dadosUpload = JSON.parse(JSON.stringify(respostaUpload.data))
    if(!dadosUpload.isSuccess) {
        resposta.erro = "Tamanho da foto excedeu o limite de upload ou ocorreu um erro ao carregar a imagem.";
        reject(resposta)
    }
    
    /* Obter a resposta do URL da Foto: */
    let respostaFotoUrl = await axios.request({
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://download1.imageonline.co/pngmaker.php',
        headers: { 
            'User-Agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0', 
            'Accept': ' */*', 
            'Accept-Language': ' pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3', 
            'Accept-Encoding': ' gzip, deflate, br', 
            'Content-Type': 'application/x-www-form-urlencoded', 
            'Origin': ' https://imageonline.co', 
            'Connection': ' keep-alive', 
            'Referer': ' https://imageonline.co/', 
            'Sec-Fetch-Dest': ' empty', 
            'Sec-Fetch-Mode': ' cors', 
            'Sec-Fetch-Site': ' same-site'
        },
        data: qs.stringify({
            'name': dadosUpload.files[0].name,
            'originalname': dadosUpload.files[0].old_name,
            'option3': dadosUpload.files[0].extension,
            'option4': '1' 
        })
    }).catch(() => {
        resposta.erro = "Erro no servidor de remover o fundo."
        reject(resposta)
    })
    /* Transformar URL da foto em Buffer */
    let fotoUrl = respostaFotoUrl.data.match(/https:\/\/download1\.imageonline\.co\/download\.php\?filename=[A-Za-z0-9]+-imageonline\.co-[0-9]+\.png/m)
    await axios.get(fotoUrl[0], {responseType: 'arraybuffer'}).then((imagemBufferResposta) => {
        resposta.resultado = imagemBufferResposta.data
        resolve(resposta)
    }).catch(() => {
        resposta.erro = "Erro ao baixar a imagem sem fundo"
        reject(resposta)
    })
   } catch(err) {
    reject({erro: "Erro geral ao remover o fundo."})
   }
 })
}

module.exports = removerFundo;