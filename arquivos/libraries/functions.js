const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios');
const cfonts = require('cfonts');
const Crypto = require('crypto');
const chalk = require('chalk');
const exec = require("child_process").exec;
const log = console.debug;
const mimetype = require('mime-types');
const cheerio = require('cheerio');
const { spawn } = require("child_process");
const ff = require('fluent-ffmpeg');
const { JSDOM } = require('jsdom');
const FormData = require('form-data');
const qs = require('qs');
const { fromBuffer } = require('file-type');
const toMs = require('ms');
const request = require('request');
const ffmpeg = require('fluent-ffmpeg');
const moment = require('moment-timezone');

/* Função 1: Carregar imagem ou vídeo em Buffer e criar um URL da mídia. */
async function upload(midia) {
  return new Promise(async(resolve, reject) => {
    try {
      let { ext, mime } = await fromBuffer(midia);
      let form = new FormData();
      
      form.append('file', midia, {'filename': Crypto.randomBytes(10).toString('hex') + `.${ext}`, 'Content-Type': mime});
        await fetch('https://xatimg.com/api/upload', {
            method: 'POST',
            body: form
        }).then(html => html.json())
        .then((post) => {
          return post;
        }).catch(error => reject(error));
     } catch (erro) {
        return console.log(erro);
     }
  });
}

/* Função 2: Realizar a conversão ou uma alteração no metadata do Sticker. */
function convertSticker(base64, author, pack){
 return new Promise(async(resolve, reject) => {
    axios('https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp', {
    method: 'POST',
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        'User-Agent': 'axios/0.21.1',
        'Content-Length': 151330
    },
    data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true,"removebg":"HQ"},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
    }).then(({data}) => {
        resolve(data.webpBase64);
    }).catch(reject);
  });
}

/* Função 3: Acessar sites com JSON e retornar seu resultado. */
async function fetchJson(url, options) { 
   const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 'DNT': 1, 'Upgrade-Insecure-Request': 1 }, ...options });
	if (!res.ok) return Promise.reject("Error")
		const json = await res.json();
		return Promise.resolve(json);
}

/* Função 4: Acessar sites com formato de texto e retornar o seu resultado */
async function fetchText(url, options) {
	const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 'DNT': 1, 'Upgrade-Insecure-Request': 1 }, method: 'GET' });
	if (!res.ok) return Promise.reject("Error")
		const json = await res.text();
		return Promise.resolve(json);
}

/* Função 5: Criar um Buffer de uma mídia (vídeo, etc...) através de um URL. */
async function getBuffer(url) {
	const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 'DNT': 1, 'Upgrade-Insecure-Request': 1 }, method: 'GET' });
	if (!res.ok) return Promise.reject("Error")
	const buffer = await res.buffer();
		return Promise.resolve(buffer);
}

async function fetchBuffer(url) {
	const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 'DNT': 1, 'Upgrade-Insecure-Request': 1 }, method: 'GET' });
	if (!res.ok) return Promise.reject("Error");
	const buffer = await res.buffer();
	    return Promise.resolve({mimetype: res.headers.get('content-type'), result: buffer});
}

/* Função 6: Criar o Metadata do Sticker */
async function createExif(pack, auth) {
  const code = [0x00,0x00,0x16,0x00,0x00,0x00]
    const exif = {
       "sticker-pack-id": "com.client.tech", 
       "sticker-pack-name": pack, 
       "sticker-pack-publisher": auth, 
       "android-app-store-link": "https://play.google.com/store/apps/details?id=com.termux", 
       "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"
    }
      let len = JSON.stringify(exif).length
        if (len > 256) {
            len = len - 256
            code.unshift(0x01)
        } else {
            code.unshift(0x00)
        }
        if(len < 16) {
            len = len.toString(16)
            len = "0" + len
        } else {
            len = len.toString(16)
        }
    const p0 = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
    const p1 = Buffer.from(len, "hex")
    const p2 = Buffer.from(code)
    const p3 = Buffer.from(JSON.stringify(exif))
    fs.writeFileSync('./arquivos/sticker/data.exif', Buffer.concat([p0, p1, p2, p3]), 
       function (err) {
            console.log(err)
            if (err) return console.error(err)
            return `./arquivos/sticker/data.exif`
     })
}

/* Função 8: Criar uma combinação, para definir como ID da mensagem. */
const generateMessageID = async() => {
    return Crypto.randomBytes(10).toString('hex').toUpperCase();
};

/* Função 9: Descobrir a extensão da mídia através de uma terminação. */
const getExtension = async(type) => {
    return await mimetype.extension(type)
}

/* Função 10: Criar uma Array com os adminstradores do grupo. */
const getGroupAdmins = (participants) => {
    admins = []
    for (let i of participants) {
        if(i.admin == 'admin') admins.push(i.id)
        if(i.admin == 'superadmin') admins.push(i.id)
    }
    return admins
}

/* Função 11: Criar uma Array com todos os membros, sem incluir os administradores. */
const getMembros = (participants) => {
    admins = []
    for (let i of participants) {
        if(i.admin == null) admins.push(i.id)
    }
    return admins
}

/* Função 12: Criar uma sequência numérica para uso nos arquivos temporários. */
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
};

/* Função 13: Fazer a conversão de segundos para dias, horas, minutos e segundos. */
function TimeCount(seconds) {
    function pad(s) {
        return (s < 10 ? "0" : "") + s
    };
        var dias = Math.floor(seconds / (60*60) / (24));
        var horas = Math.floor(seconds / (60*60) % (24));
        var minutos = Math.floor(seconds % (60*60) / 60);
        var segundos = Math.floor(seconds % 60);
    return `${pad(dias)} dia(s), ${pad(horas)} hora(s), ${pad(minutos)} minuto(s) e ${pad(segundos)} segundo(s).`;
}

/* Função 14: SimSimi Brasil - (Português) */
async function simih(text) {
  try {
    datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {
       method: 'POST',
       headers: {
         'content-type': "application/x-www-form-urlencoded"
       },
       body: "text="+text+"&lc=pt"
     })
    return datasimi.message;
  } catch (e) {
    return;
  }
};

/* Função 15: Verificar se seu peso está adequado para a sua altura. (Obesidade) */
function obeso(peso, altura) {
  return Number(parseFloat(peso) / (parseFloat(altura) ** 2)).toFixed(2);
};

/* Função 16: Transformar a primeira letra em maiuscula. */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
};

/* Função 17: Conversão de bytes para KB, MB, GB, TB. */ 
const convertBytes = function(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if(bytes == 0) return "0 Bytes";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        if(i == 0) {
            return bytes + " " + sizes[i];
        }
     return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

/* Função 18: Contar dias */
const countDays = (date1, date2) => {
if (!(date1 || date2)) return 0
date1 = new Date(date1[1]+"/"+date1[0]+"/"+date1[2])
date2 = new Date(date2[1]+"/"+date2[0]+"/"+date2[2])
const timeDiff = Math.abs(date2.getTime() - date1.getTime());
const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
return diffDays || 0
}

/* Função 19: Horário */
const timeDate = (tempo, now, x = true) => {
   if (Number(now) && x) return moment(now * 1000).tz('America/Sao_Paulo').format(tempo)
   if (Number(now)) return moment(now).tz('America/Sao_Paulo').format(tempo)
     return moment.tz('America/Sao_Paulo').format(tempo);
}

/* Função 20: Transformar números sem vírgula em números decimais. */
const formatNumberDecimal = (num) => { 
  return (num).toLocaleString('pt-BR'); 
}

/* Função 21: Data por extenso traduzida para o português do Brasil. */
async function formatDateOriginal(number, locale = 'pt') {
  const dateInformation = new Date(number);
  const getDateOrig = await dateInformation.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});
  return getDateOrig;
}

const chyt = "5521967672765@s.whatsapp.net";
const nit = "5521967672765@s.whatsapp.net";
const supre = "5521967672765@s.whatsapp.net";

const usedCommandRecently = new Set()
const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from) => {
usedCommandRecently.add(from)
setTimeout(() => usedCommandRecently.delete(from), 5000)}

module.exports = { fetchBuffer, countDays, timeDate, obeso, capitalizeFirstLetter, simih, TimeCount, getBuffer, fetchJson, fetchText, formatNumberDecimal, generateMessageID, convertBytes, getGroupAdmins, getMembros, isFiltered, addFilter, chyt, getExtension, getRandom, convertSticker, upload, nit, supre, formatDateOriginal }
