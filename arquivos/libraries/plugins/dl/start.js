"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib = require('./lib');
const NodeID3 = require('node-id3').Promise;
const { SoundCloud, YouTube, Spotify, Deezer } = require('./downloader');
const classConfig = {
	query: 'Quase - Banda 007',
	format: 'mp3',
	randomSelect: false,
	localFile: false,
	downloadFile: false,
	limitSeconds: 0,
	limitPlayList: 100,
	limitSearch: 25, // Limite de pesquisa no Spotify [25]
	id: '', // Token id [Spotify]
	secret: '', // Token secret [Spotify]
	type: 'youtube' // soundcloud || spotify
}
class Downloader extends Map {
	constructor(config = {}) {
		super();
		config = Object.assign(classConfig, config)
		this.isConfig(config)
	}
	
	deezer(config = {}) {
		return new Deezer(config)
	};
	
	spotify(config = {}) {
		return new Spotify(config)
	};
	
	youtube(config = {}) {
		return new YouTube(config)
	};
	
	soundcloud(config = {}) {
		return new SoundCloud(config)
	};
	
	isConfig(config = classConfig) {
		this.type = String(config.type || this.type)
		this.dir = String(config.localFile || this.dir)
		this.seconds = Number(config.limitSeconds || this.seconds)
		this.limitPlayList = Number(config.limitPlayList || this.limitPlayList)
		this.downloadFile = Boolean(config.downloadFile)
		this.randomSelect = Boolean(config.randomSelect);
		delete config.type
		delete config.limitPlayList
		delete config.limitSeconds
		delete config.downloadFile
		delete config.randomSelect
		this.configClass = config
		return this
	};
	
	isUrlYt(url) {
		url = lib.isUrl(url)
		if (!url) return null
		
		url = url[0]
		return url?.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/user\/\S+|\/shorts\/|\/playlist\?list=|\/)([^\s?&]+)/)
	};
	
	isUrlScdl(url, type) {
		url = lib.isUrl(url)
		if (!url) return null
		
		url = url[0]
		switch (type) {
			case 'track':
				return url.match(/^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)\/?$/)
			case 'playlist':
				return url.match(/^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/sets\/([A-Za-z0-9_-]+)\/?$/)
			case "artist":
				return url.match(/^https?:\/\/(on\.|)(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/?$/)
			case 'user':
				return url.match(/@([a-zA-Z0-9_-]+)/)
			default:
				return null
		}
	};
	
	isUrlYt(url) {
		return url?.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/user\/\S+|\/shorts\/|\/playlist\?list=|\/)([^\s?&]+)/)
	};
	
	startClass(ops = {}) {
		let { type, config, force } = Object.assign({ type: this.type, config: this.configClass, force: false }, ops)
		this.typeQuery = this.isType(config.query)
		if (this.typeQuery === 'Pesquisa') {
			if (!/soundcloud|youtube|spotify/.test(type)) return Promise.reject('Error, nenhum tipo(Youtube/Spotify/SoundCloud) foi encontrado.')
		} else {
			type = /SoundCloud/.test(this.typeQuery) ? 'soundcloud' : /Spotify/.test(this.typeQuery) ? 'spotify' : 'youtube'
		}
		if (this.has(type) && !force) {
			return Object.assign(this.get(type), config)
		}
		
		let classStart = this.youtube(config)
		if (type === 'spotify') {
			if (!(config.id && config.secret)) {
				throw new Error('Esta faltando ID e a SECRET token da Spotify, verifique o seu token no site oficial da Spotify DEV.')
			}
			classStart = this.spotify(config)
		} else if (type === 'soundcloud') {
			classStart = this.soundcloud(config)
		}
		//console.log('class:', classStart)
		this.set(type, classStart)
		return classStart
	};
	
	isType(url) {
		return this.isUrlYt(url) ? 'YouTube - '+(/\/playlist\?list=/.test(url) ? "Playlist" : /\/shorts\//.test(url) ? "Shorts" : /music\./.test(url) ? "Music" : "Video") : this.isUrlScdl(url, 'track') ? 'SoundCloud - Track' : this.isUrlScdl(url, 'artist') || this.isUrlScdl(url, 'user') ? 'SoundCloud - Artist' : this.isUrlScdl(url, 'playlist') ? 'SoundCloud - Playlist' : lib.isUrl(url) && (url.includes("spotify.link") || url.includes("open.spotify.com")) ? ('Spotify - '+(url.includes('/album/') ? 'Album' : url.includes('/playlist/') ? 'PlayList' : 'Track')) : 'Pesquisa'
	};
	
	async metadata(path, obj) {
		let image = null
		if (path.endsWith('.mp3')) { 
			await lib.download(obj.image, this.dir+(obj.videoId || obj.id)+'-img').then(v => {
				image = v.file
			}).catch(() => {
				image = undefined
			})
			await NodeID3.write({
				title: obj.title,
    			artist: obj.author.name,
    			album: (obj.playlist.title || obj.title),
				image,
				bpm: obj.kbps,
				genre: (obj.genre?.split(' & ') || ['Soundtrack']),
				date: obj.publishedAt,
    			trackNumber: (obj.track || obj.playlist.track)
			}, path)
			lib.deleteFile(image)
		}
		return Promise.resolve(obj)
	};
	
	downloadZip() {
		const Data = this.startClass()
		if (!/Playlist/.test(this.typeQuery)) return Promise.reject('Apenas Playlist.');
		
		this.downloadFile = true
		return Data.get().then(async ({ title, id, listId, name, videos, track, tracks }) => {
			this.dir = this.dir+(listId || id)+'/'
			const cache = videos || track || tracks
			const count = Math.min(cache.length, this.limitPlayList)
			const downWait = cache.splice(0, count).map((v, i) => {
				v.url = v.videoId ? 'https://youtube.com/watch?v='+v.videoId : v.url
				return this.download({
					query: v.url,
					title: (name || title),
					track: (i+1)+'/'+count
				})
			});
			const downResult = await Promise.allSettled(downWait)
			const success = downResult.filter(i => i.status == 'fulfilled').map(v => {
				v = v.value
				return {
					size: v.size,
					title: v.title,
					url: v.url,
					id: (v.videoId || v.id),
					fileName: lib.renameFile(v.title)+'.'+(v.result.split('.').pop()),
					buffer: v.buffer
				}
			})
			const unsuccessfully = downResult.filter(i => i.status == 'rejected').map(v => v.reason)
			if (!success.length) return Promise.reject('Sem mídia baixada.')
			
			const zip = await lib.zip(this.dir+title, success)
			return Promise.resolve({
				playlist: title,
				zip: zip,
				success: success,
				unsuccessfully: unsuccessfully
			});
		});
	};
	
	download(track = {}) {
		const Data = this.startClass()
		Data.query = track.query || Data.query
		this.typeQuery = this.isType(Data.query)
		return Data.get().then(async (getres) => {
			delete track.query
			const r = { title: '', track: '1/1' }
			if (Array.isArray(getres) || ('videos' in getres) || ('tracks' in getres)) {
				const array = getres.tracks || getres.videos || getres || []
				if (!array.length) return Promise.reject("Sem resultado!")
				
				const index = this.randomSelect ? Math.floor(Math.random() * array.length) : 0
				if (/playlist/.test(getres.type)) {
					r.title = getres.title || getres.name
					r.track = getres.track || (index+1)+'/'+array.length
				}
				getres = array[index]
				getres = ('get' in getres) && await getres.get() || await Data.get(getres.url) || null
			}
			if (!getres) return Promise.reject("Error ao encontrar a URL.");
			if (this.seconds && getres.seconds >= this.seconds) return Promise.reject(`O limite de tempo ultrapassou, essa/esse track/video chega a ser ${getres.timestamp}.`)
			
			getres.playlist = Object.assign(r, track)
			delete getres.duration
			return getres.download().then(({ result, quality, size }) => {
				if (this.downloadFile) {
					if (!this.dir) return Promise.reject('Não foi declarado o local onde vai ser salvado!')
					
					return Data.streamAudio(result, this.dir+(getres.videoId || getres.id)).then(async ({ file, buffer, ext, kbps }) => {
						await this.metadata(file, getres)
						const { size, sizeBytes } = Data.sizeBytesFile(file)
						return Promise.resolve({
							result: file,
							quality: (ext === 'mp3' ? kbps+' Kbps' : quality),
							size, sizeBytes,
							...getres,
							buffer
						})
					});
				} else {
					return Promise.resolve(Object.assign({
						result, quality, size
					}, getres));
				}
			});
		});
	};
	
	search(query = this.query) {
		const Data = this.startClass()
		Data.query = track.query || Data.query
		this.typeQuery = this.isType(Data.query)
		return Data.get()
	};
	
}
exports.dl = Downloader
exports.dlMidia = { SoundCloud, YouTube, Spotify }
exports.default = Downloader