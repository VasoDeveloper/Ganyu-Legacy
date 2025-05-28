"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrl = exports.fetch = exports.getHTML = exports.userAgent = exports.bytesToSize = exports.convertSforM = exports.gerarPHPSESSID = void 0;
const crypto = require("crypto");
const request = require('request');
const fetch = require('node-fetch').default; // 2.6.1

exports.isUrl = function (url) {
	const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/
	return regex.test(url) && url.match(regex)
};

exports.getHTML = function (url, config = {}) {
	return new Promise((resolve, reject) => {
		url = (0, exports.isUrl)(url)[0] || null
		if (!url) return reject('O "url" não representa ser uma url.')
		request({
			url,
			...Object.assign({
				headers: {
					'User-Agent': (0, exports.userAgent)(),
				}
			}, config)
		}, (error, res, body) => {
			if (error || res.statusCode !== 200) return reject(error || res)
			try {
				body = config.json ? body : JSON.parse(body)
			} catch { }
			resolve(body)
		});
	});
};

exports.getInfoUrlPost = function (url, config = {}) {
	return new Promise((resolve, reject) => {
		url = (0, exports.isUrl)(url)[0] || null
		if (!url) return reject('O "url" não representa ser uma url.')
		request.post({
			url,
			...Object.assign({
				headers: {
					'User-Agent': (0, exports.userAgent)(),
				}
			}, config)
		}, (error, res, body) => {
			if (error || res.statusCode !== 200) return reject(error || res)
			try {
				body = config.json ? body : JSON.parse(body)
			} catch { }
			resolve(body)
		});
	});
};

exports.fetch = function (url, options = {}) {
	return fetch(url, options)
};

exports.getOriginalUrl = function (link) {
	return (0, exports.fetch)(link).then(({ url }) => Promise.resolve(url))
};

exports.userAgent = function () {
	const oos = [ 'Macintosh; Intel Mac OS X 10_15_7', 'Macintosh; Intel Mac OS X 10_15_5', 'Macintosh; Intel Mac OS X 10_11_6', 'Macintosh; Intel Mac OS X 10_6_6', 'Macintosh; Intel Mac OS X 10_9_5', 'Macintosh; Intel Mac OS X 10_10_5', 'Macintosh; Intel Mac OS X 10_7_5', 'Macintosh; Intel Mac OS X 10_11_3', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_6_8', 'Macintosh; Intel Mac OS X 10_10_2', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_11_5', 'Windows NT 10.0; Win64; x64', 'Windows NT 10.0; WOW64', 'Windows NT 10.0' ];

	return `Mozilla/5.0 (${oos[Math.floor(Math.random() * oos.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 3) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
};

exports.bytesToSize = function (pBytes, pUnits = 'si') {
	if(!Number(pBytes)) return '0 Bytes';
	if(pBytes == 0) return '0 Bytes';
	if(pBytes == 1) return '1 Byte';
	if(pBytes == -1) return '-1 Byte';
	
	var bytes = Math.abs(pBytes)
	if (pUnits && pUnits.toLowerCase() == 'si') {
		var orderOfMagnitude = Math.pow(10, 3);
		var abbreviations = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	} else {
		var orderOfMagnitude = Math.pow(2, 10);
		var abbreviations = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	}
		
	var i = Math.floor(Math.log(bytes) / Math.log(orderOfMagnitude));
	var result = (bytes / Math.pow(orderOfMagnitude, i));
	if (pBytes < 0) result *= -1;
	if (result >= 99.995 || i==0) return result.toFixed(0) + ' ' + abbreviations[i];
		
	return result.toFixed(2) + ' ' + abbreviations[i];
};

exports.convertSforM = function (duration) {
	duration = Number(duration)
	if (!duration) return '00:00'
		
	var h = Math.floor((duration % (3600 * 24)) / 3600)
	var m = Math.floor((duration % 3600) / 60)
	var s = Math.floor(duration % 60)
	const f = (g) => (g <= 9 ? `0${g}` : g)
	return (h ? `${f(h)}:` : '')+f(m)+':'+f(s)
};

exports.gerarPHPSESSID = function (tamanho = 32) {
	const caracteresValidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let phpSessId = '';
	// Gere um valor aleatório para cada caractere do PHPSESSID
	for (let i = 0; i < tamanho; i++) {
		const indiceAleatorio = crypto.randomInt(0, caracteresValidos.length);
		phpSessId += caracteresValidos.charAt(indiceAleatorio);
	}
	return phpSessId;
};

exports.random = function (array) {
	if (!(Array.isArray(array) && !array.length)) return void 0
	return array[Math.floor(Math.random() * array.length)];
}