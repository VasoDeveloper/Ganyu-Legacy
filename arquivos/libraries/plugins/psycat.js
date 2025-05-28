/* 
    ❓️ Função: Você prefere? 
    📃 Descrição: Uma brincadeira do bot, chamada "Você prefere?", com o objetivo de interagir o grupo aonde usa o comando.
    🏷 Desenvolvedor: Crap © Ethern-BOT
*/

const request = require('request');
const fs = require('fs');

class ScrapperData {

    static userAgent() {
        const oos = [ 'Macintosh; Intel Mac OS X 10_15_5', 'Macintosh; Intel Mac OS X 10_11_6', 'Windows NT 10.0; Win64; x64', 'Windows NT 10.0; WOW64', 'Windows NT 10.0', 'Macintosh; Intel Mac OS X 10_15_7', 'Macintosh; Intel Mac OS X 10_6_6', 'Macintosh; Intel Mac OS X 10_9_5', 'Macintosh; Intel Mac OS X 10_10_5', 'Macintosh; Intel Mac OS X 10_7_5', 'Macintosh; Intel Mac OS X 10_11_3', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_6_8', 'Macintosh; Intel Mac OS X 10_10_2', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_11_5' ];
        return `Mozilla/5.0 (${oos[Math.floor(Math.random() * oos.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 3) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
    }
	
	static getHTML(url, config = {}) {
		return new Promise((resolve, reject) => {
			request({
				url,
				...config
			}, (error, res, body) => {
				if (error) return reject(error);
				try {
					body = JSON.parse(body);
				} catch { }
				
				resolve(body);
			});
		});
    }
    
    static psycatgames(idUrl, reload) {
		const user = this.userAgent()
		const psycatgames = './database/func/json/vab.json'
		return new Promise((resolve, reject) => {
			if (fs.existsSync(psycatgames) && !reload) {
				try {
					return resolve(JSON.parse(fs.readFileSync(psycatgames, 'utf-8')));
				} catch { }
			} 
			
			this.getHTML('https://psycatgames.com/pt/app/would-you-rather/'+idUrl, {
				method: 'GET',
				headers: {
					referer: 'https://psycatgames.com/pt/app/would-you-rather/',
					'User-agent': user
				}
			}).then(html => {
				html = html.split('\nconst TK=')[0].split(/{id:/g).filter(v => !/data=/.test(v)).map(i => {
					const array = i.split(/nsfw:(true|false),questions:/g)
					const nsfw = array[1] !== 'false'
					const id = array[0]?.replaceAll('"', '')?.replace(',', '')
					const questions = JSON.parse(array[2]?.replaceAll(`},`, '').replaceAll('}]', ''))
					return {
						id,
						nsfw,
						questions: questions.map(v => {
							const g = v.replaceAll('Você prefere ', '').split(' ou ').map(y => y.replaceAll(' / ', '/').replace('?', ''))
							const pergunta1 = g[0]
							const pergunta2 = g[1]
							return { pergunta1, pergunta2 }
						})
					}
				});
				fs.writeFileSync(psycatgames, JSON.stringify(html, null, '\t'));
				resolve(html);
			}).catch(error => reject(error))
		});
	}
	
}

module.exports = {
	psycatgames: (reload, url = 't.8627388fc85dd6bb72683bd2fa08e575.js') => ScrapperData.psycatgames(url, reload)
}