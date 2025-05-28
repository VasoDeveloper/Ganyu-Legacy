// Importando o módulo:
const fetch = require("node-fetch");

const setClass = new Object({
   auth: "0e10d190ad06fd4b23d5c57bc220b684", // Token gerado(a) através do Last.fm
   user: "", // Usuário da conta do Last.fm
   method: "", // Tipo de requisição, saiba mais sobre no dashboard da API do Last.fm
   limit: "50" // O número de resultados a serem buscados por página.
});

class LastFM {

    // Construção da requisição (Constructor):
    constructor(configuration = {}) {
      const { auth, user, method, limit } = { ...setClass, ...configuration };
      // Parâmetros de requisição:  
      this.auth = auth; 
      this.user = user; 
      this.method = method; 
      this.limit = limit 
   }
   
   // Iniciando a função do Last.fm:
   async start(auth = this.auth, user = this.user, method = this.method, limit = this.limit) {
   let config = () => Promise.reject('Sem configuração.'); // Se caso não for configurado.
    return new Promise(async(resolve, reject) => {
        await fetch(`https://ws.audioscrobbler.com/2.0/?limit=${limit}&method=${method}&user=${user}&api_key=${auth}&format=json`, {
            headers: {
               'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            }
      }).then(async(response) => {
        const result = await response.json();
        return resolve(result); // Resultado final.
      }).catch((error) => {
        return reject(error)
      })
    })
        
   }
}

module.exports = LastFM; // Exportação