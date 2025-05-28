const fetch = require('node-fetch').default
const cheerio = require('cheerio')

class TudoCelular {

 static async search(name) {
   return new Promise(async(resolve, reject) => {
     fetch(`https://www.tudocelular.com/?sName=${encodeURI(name)}`).then(async(res) => {
     if(!res.ok) return reject('Falha na requisição');
        const html = await res.text();
        const $ = await cheerio.load(html);
        const listPhones = $('#main_container > section > section.big_notices > div > ul > li');
        if(listPhones.length < 1) return reject('Sem resultado.');
        const jsonListPhones = new Array();
        for(let obj of listPhones) {
            var url = obj.children[1].attribs.href
            var title = obj.children[3].attribs['data-model'];
            var image = obj.children[1].children[1].attribs.style.replace(/background: url\(|\) no-repeat center center/g, '').replace('w=28', 'w=280').replace('t=44', 't=440')
            jsonListPhones.push({
                url, 
                title, 
                image
            })
        }
        resolve(jsonListPhones)
     }).catch(async err => {
        reject(err)
     })
  })
 }

 static async info(url) {
   return new Promise(async(resolve, reject) => {
      fetch(url).then(async(res) => {
      if(!res.ok) return reject("Falha na requisição");
        const buffer = await res.buffer();
        const html = Buffer.from(buffer).toString('latin1');
        const $ = await cheerio.load(html)
        const jsonRes = {}
        const title = $('div.row_titles > ul.phone_column_features > li')
        const content = $('div.phone_column > ul.phone_column_features > li')
          for(let i = 0 ; i < title.length; ++ i) {
            var key = title[i].children[0].data.trim().normalize("NFD").replace(/[\u0300-\u036f]|\-\s/g, "").replace(/\s/g, '_')
            if(content[i].children[0]?.type == 'tag' && content[i].children[0]?.name == 'i' ) {
               jsonRes[key] = (content[i].children[0]?.attribs.class == 'ok')
            } else if(content[i].children[0]?.type == 'tag' && content[i].children[0]?.name == 'b' ) {
                jsonRes[key] = content[i].children[0]?.children[0]?.data + content[i].children[2]?.children[0]?.data
            } else if(content[i]?.children.length == 2 && content[i].children[1].name == 'small') {
                jsonRes[key] = content[i].children[0]?.data + content[i]?.children[1]?.children[0]?.data
            } else if(key == 'Outros') {
                jsonRes[key] = []
                for(let obj of content[i]?.children) {
                    if(obj.type != 'tag') jsonRes[key].push(obj.data)
                }
            } else if(key == 'MELHOR_PRECO' || key == 'Preco_Extra' || key == 'Faixa_de_Preco') {
                key = (key.charAt(0).toUpperCase() + key.slice(1).toLowerCase())
                    jsonRes[key] = {
                        price: content[i].children[0].children[0].children[0].data,
                        url: key == 'Faixa_de_preco' ? 'https://www.tudocelular.com' + content[i].children[0].attribs.href : content[i].children[0].attribs.href
                    }
            } else {
               if(content[i].children[0]?.data != undefined) jsonRes[key] = content[i].children[0]?.data 
            }
          }
            resolve(jsonRes);
       }).catch(async err => {
           reject(err)
       })
    })
 }

}

module.exports = TudoCelular
