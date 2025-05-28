"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise = exports.removeExtFile = exports.renameFile = exports.read = exports.write = exports.mkDir = exports.fromBuffer = exports.downloadFileFromUrl = exports.fromBuffer = exports.getBuffer = exports.download = exports.rename = exports.deleteFile = exports.sizeBytesFile = exports.zip = void 0;
const http = require('http');
const path = require("path");
const https = require('https');
const FileType = require('file-type'); // 16.5.3
const {
	rmSync,
	statSync,
	mkdirSync,
	existsSync,
	unlinkSync,
	renameSync,
	readFileSync,
	writeFileSync,
	createWriteStream
} = require('fs');

exports.promise = async function (array, type = 'settled') {
	if (!Array.isArray(array)) return Promise.reject("Isso não é uma Array.")
	if (!array.length) return Promise.reject("Necessário ter algo dentro da array.")
		
	switch (type) {
		case 'settled':
			let results = await Promise.allSettled(array)
			results = results.find(i => i.status === 'fulfilled')
			return results ? Promise.resolve(results.value) : Promise.reject('Nenhuma data foi encontrada.')
		case 'any':
			return Promise.any(array)
		case 'race':
			return Promise.race(array)
		case 'all':
			return Promise.all(array)
		default:
			return Promise.reject(arry)
	}
};

exports.isUrl = function (url) {
	const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/
	return regex.test(url) && url.match(regex)
};

exports.removeExtFile = function (file) {
	const spOrSDt = file.startsWith('./') || file.startsWith('/data/data/')
	if (!spOrSDt) return { pasta: './', file, newFile: file }
	
	const pasta = file.endsWith('/') ? file : file.replaceAll(path.basename(file), '')
	let ext = file.split('.').pop()
	if (FileType.extensions.has(ext)) {
		file = path.basename(file, '.'+ext)
	} else {
		ext = ''
	}
	file = path.basename(file)
	return { pasta, file, newFile: pasta+file, ext }
};

exports.rename = function (name) {
	return Number(name) ? name : name?.replace(/á|â|ã|à|ä/g, 'a').replace(/Á|Â|Ã|À|Ä/g, 'A').replace(/ć|ç|č/g, 'c').replace(/Ć|Ç|Č/g, 'C').replace(/é|ê|è|ë/g, 'e').replace(/É|Ê|È|Ë/g, 'E').replace(/í|î|ì|ï/g, 'i').replace(/Í|Î|Ì|Ï/g, 'I').replace(/ó|õ|ô|ò|ö/g, 'o').replace(/Ó|Õ|Ô|Ò|Ö/g, 'O').replace(/ú|û|ù|ü/g, 'u').replace(/Ú|Û|Ù|Ü/g, 'U').replace(/[^a-zA-Z0-9-_().\s]+/g, '-').trim()
};

exports.renameFile = function (directory, createPaste = false) {
	const { pasta, file } = (0, exports.removeExtFile)(directory)
	if (createPaste) {
		(0, exports.mkDir)(pasta, false)
	}
	return pasta+(0, exports.rename)(file)
};

exports.deleteFile = function (file) {
	if (!existsSync(file)) return false
	unlinkSync(file)
	return true
};

exports.read = function (file) {
	(0, exports.mkDir)(file)
	return existsSync(file) ? readFileSync(file) : Buffer.alloc(1)
};

exports.sizeBytesFile = function (file) {
	const data = existsSync(file) ? statSync(file) : {}
	return Object.assign(data, {
		size: this.bytesToSize(data.size || 0),
		sizeBytes: data.size || 0
	})
};

exports.zip = function (zipName, array) {
	return new Promise((resolve, reject) => {
		zipName = (0, exports.renameFile)(zipName, true)+'.zip'
		const archiver = require("archiver")
		var archive = archiver('zip');
		var output = createWriteStream(zipName);
		output.on('close', function () {
			resolve(zipName);
		});
		archive.on('error', reject);
		archive.pipe(output);
		for (let v of array) {
			archive.append(v.buffer(), { name: v.fileName });
		}
		archive.finalize();
	});
};

exports.write = function (filename, buffer = Buffer.alloc(1)) {
	const anathy = (0, exports.mkDir)(filename)
	const tempFilename = path.join(path.dirname(filename), `.${path.basename(filename)}.tmp`);
	if (typeof buffer === 'object') {
		buffer = JSON.stringify(buffer, null, '\t')
	} else {
		buffer = new Buffer.from(buffer, 'base64')
	}
	writeFileSync(tempFilename, buffer)
	renameSync(tempFilename, filename)
	return filename
};

exports.mkDir = function (dir, delet = false) {
	const { pasta } = (0, exports.removeExtFile)(dir)
	if (pasta === './') return './'
	
	const folderInfo = existsSync(pasta) && statSync(pasta)
	if (folderInfo) {
		if (!folderInfo?.isDirectory()) {
			throw new Error(`Encontrou algo que não é um diretório em ${paste}, exclua-o ou especifique um local diferente.`);
		} else if (delet) {
			rmSync(pasta, { recursive: true, force: true });
		}
	} else {
		mkdirSync(pasta, { recursive: true });
	}
	return pasta
};

exports.fromBuffer = async function (buffer) {
	if (!Buffer.isBuffer(buffer)) buffer = Buffer.alloc(1)		
	const ext = await FileType.fromBuffer(buffer) || { mime: 'application/octet-stream', ext: 'bin' }
	return ext
};

exports.downloadFileFromUrl = function (url, destinationPath, options = {}) {
	return new Promise((resolve, reject) => {
		(url.startsWith('https://') ? https.get : http.get)(url, options, (res) => {
			if (res.statusCode !== 200) {
				reject(`Falha na requisição. Código de status: ${res.statusCode}`);
				return
			}
				
			(0, exports.download)(res, destinationPath).then(resolve).catch((error) => reject(error))
		}).on('error', (err) => {
			reject(`Erro na requisição: ${err.message}`);
		});
	});
};

exports.fetchBuffer = function (url, options) {
	let buffer = null
	const fetch = require('node-fetch').default; // 2.6.1
	return fetch(url, typeof options == 'object' ? options : {}).then(async (res) => {
		if (!(res && 'ok' in res)) return Promise.reject(res)
		try {
			buffer = await res.buffer()
			buffer = new Buffer.from(buffer.toString('base64'), 'base64');
		} catch {
			try {
				buffer = await res.arrayBuffer()
				buffer = new Buffer.from(buffer, 'base64');
			} catch { };
		};
		if (Buffer.isBuffer(buffer)) {
			return Promise.resolve(buffer)
		} else {
			return Promise.reject(res)
		}
	});
};

exports.getBuffer = function (url, options = []) {
	const httpsAgent = new https.Agent({
		rejectUnauthorized: false
	});
	if (!/^https?:\/\//.test(url)) return Promise.reject('No url!')
	
	Object.assign(options, [
		{
			method: "GET",
			url,
			agent: httpsAgent,
			headers: { 'DNT': 1, 'Upgrade-Insecure-Request': 1 },
			responseType: 'arraybuffer'
		}, {
			method: 'GET',
			headers: { pragma: 'no-cache', range: 'bytes=0-' },
    		body: undefined
		}, {
			method: 'GET',
			agent: httpsAgent,
			headers: { 'User-Agent': 'okhttp/4.5.0' }
		}
	])
	return (0, exports.promise)(options.filter(i => i).map(config => (0, exports.fetchBuffer)(url, config)), 'any')
};

exports.download = async function (file, fileName) {
	const renameFile = (name) => {
		if (!name) {
			name = (0, exports.mkDir)('./tmp/')+'download-'+Date.now()
		} else {
			const p = (0, exports.removeExtFile)(name)
			name = (0, exports.mkDir)(p.pasta)+p.file
		}
		return name
	}
	if (existsSync(file)) {
		const read = readFileSync(file)
		const ft = (0, exports.removeExtFile)(file)
		const type = await (0, exports.fromBuffer)(read);
		if (fileName || !ft.ext) {
			unlinkSync(file)
			fileName = renameFile(fileName || file)+'.'+type.ext
			writeFileSync(fileName, read)
			file = fileName
		}
		return Promise.resolve({
			file,
			buffer: () => {
				unlinkSync(file)
				return read
			},
			...type,
			sizeBytes: () => statSync(file).size
		})
	} else if (Buffer.isBuffer(file) || /^data:.*?\/.*?;base64,/i.test(file)) {
		if (/^data:.*?\/.*?;base64,/i.test(file)) {
			file = new Buffer.from(file.split(",")[1], 'base64')
		}
		
		const type = await (0, exports.fromBuffer)(file);
		fileName = renameFile(fileName)+"."+type.ext
		writeFileSync(fileName, file)
		return Promise.resolve({
			file: fileName,
			buffer: () => {
				unlinkSync(fileName)
				return file
			},
			...type,
			sizeBytes: () => statSync(fileName).size
		})
	} else if (/^(https|http)?:\/\//.test(file)) {
		fileName = renameFile(fileName)
		file = (0, exports.isUrl)(file)[0]
		return (0, exports.promise)([
			(0, exports.getBuffer)(file).then((buffer) => {
				return (0, exports.download)(buffer, fileName)
			}),
			(0, exports.downloadFileFromUrl)(file, fileName)
		], 'any')
	} else if (typeof file === 'object' && Object.keys(file).includes('pipe')) {
		return new Promise((resolve, reject) => {
			fileName = renameFile(fileName)
			const fileStream = createWriteStream(fileName);
			file.pipe(fileStream);
			fileStream.on('finish', async () => {
				fileStream.close();
				(0, exports.download)(fileName).then(resolve).catch(error => reject(error))
			});
			fileStream.on('error', (err) => {
				(0, exports.deleteFile)(fileName);
				reject(`Erro ao salvar o arquivo: ${err.message}`);
			});
		});
	} else {
		return Promise.reject({ message: "Não foi detectado nenhum tipo de arquivo conhecido.", error: file });
	}
};