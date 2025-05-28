"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamAudio = exports.convertTypeAudio = void 0;
const { exec, spawn } = require("child_process");
exports.streamAudio = function (path, filename) {
	return this.download(path, filename).then(async (v) => {
		return new Promise((resolve, reject) => {
			exec(`ffprobe -i ${v.file} -show_streams -select_streams a -of json -loglevel error`, (err, stdout) => {
				try {
					stdout = JSON.parse(stdout).streams
				} catch {
					stdout = []
				}
				if (err || !stdout?.length) {
					this.deleteFile(v.file);
					return reject({ message: (!stdout?.length ? 'Sem áudio!' : 'Error.'), error: err })
				};
				
				resolve(Object.assign(v, {
					kbps: (Number(stdout[0]['bit_rate']) / 1000),
					rate: Number(stdout[0]['sample_rate'])
				}));
			});
		});
	});
};

exports.convertTypeAudio = function (path, cnvtType, fileName) {
	return this.download(path).then(async (v) => {
		return new Promise((resolve, reject) => {
			let ext = cnvtType
			if (v.file.endsWith(cnvtType)) return resolve(v.file)
			if (cnvtType === 'm4a') {
				cnvtType = "-c:a aac -b:a 192k"
			} else if (cnvtType === 'wav') {
				cnvtType = "-acodec pcm_s16le -ar 44100"
			} else if (/ogg|opus/.test(cnvtType)) {
				cnvtType = '-ar 48000 -vn -c:a libopus'
			} else {
				cnvtType = "-acodec libmp3lame"
				ext = 'mp3'
			}
			
			fileName = this.renameFile(fileName)+'.'+ext
			const top = spawn('ffmpeg', `-y -i ${v.file} ${cnvtType} ${fileName}`.split(/ +/))
			top.stderr.pipe(process.stderr);
			top.on('error', (err) => {
				reject(err);
			});
			top.on('close', () => {
				this.deleteFile(v.file)
				resolve(fileName);
			});
		});
	});
};