/* 
    ❓️ Função: KarloAI (Geração de Imagens)
    📃 Descrição: É uma inteligência artificial desenvolvida pelo grupo chinês Kakao, capaz de criar imagens através de prompt, é possível criar imagens com NSFW.
    ⚠️ Observação:
        • É nescessário você ter um token gerado pelo site da Kakao, para criar não é nescessário nenhum tipo de pagamento.
        • Lembrando, a quantidade de requisição ainda não foi localizada no site. Então, pode ser um software de uso gratuito...
    🏷 Elaboração: Victor G. © Sabrina-BOT
    🔧 WhatsApp: +55 82 8827-9194
*/

const axios = require('axios');
const setClass = new Object({apiKey: "", prompt: "", negative_prompt: ""});

class KarloAI {
    constructor(config = {}) {
      const { apiKey, prompt, negative_prompt, options } = { ...setClass, ...config };
      this.apiKey = apiKey;
      this.negative_prompt = negative_prompt;
      this.prompt = prompt;
    
   }
  
   async start(apiKey = this.apiKey, prompt = this.prompt, negative_prompt = this.negative_prompt) {
    let config = () => Promise.reject('Error.'); // Se caso não for configurado
    try {
       const response = await axios.post('https://api.kakaobrain.com/v2/inference/karlo/t2i', {
         version: 'v2.1',
         prompt: prompt,
         negative_prompt: negative_prompt,
         height: 1024,
         width: 1024
       },
       {
         headers: {
            'Authorization': `KakaoAK ${apiKey}`,
            'Content-Type': 'application/json'
        }
      });
        return Promise.resolve(response.data);
      } catch(error) {
        return Promise.reject("Ocorreu um erro ao gerar a imagem.");
      }
   }
   
}
   
module.exports = KarloAI 