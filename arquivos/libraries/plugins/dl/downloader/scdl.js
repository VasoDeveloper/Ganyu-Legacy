"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diretory = __dirname;
const { Client, Util, keygen }= require("soundcloud-scraper"); // 5.0.3
exports.SoundCloud = class SoundCloud extends Client {
	constructor({ query, classConfig }) {
		super();
		Object.assign(this, classConfig)
		this.query = String(query)
		this._token = this._timestamp = null
	}
	
	isUrlScdl(url, type) {
		url = this.isUrl(url)
		if (!url) return null
		
		url = url[0]
		switch (type) {
			case 'track':
				return url.match(/^https?:\/\/(on\.|)(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)/)
			case 'playlist':
				return url.match(/^https?:\/\/(on\.|)(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/sets\/([A-Za-z0-9_-]+)/)
			case "artist":
				return url.match(/^https?:\/\/(on\.|)(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)/)
			case 'user':
				return url.match(/@([a-zA-Z0-9_-]+)/)
			default:
				return null
		}
	};
	
	async getUrlDownload(url) {
		const Dir = diretory+'/tokens/soundcloud.json'
		try {
			const data = JSON.parse(this.read(Dir).toString('utf8'))
			this._token = data?.token
			this._timestamp = data?.timestamp
		} catch { }
		const date = Date.now() - Number(this._timestamp)
        if (date >= (1000 * 60 * 60)) {
			const token = await keygen(true)
			this._token = token
			this._timestamp = Date.now()
			this.write(Dir, {
				token: this._token,
				timestamp: this._timestamp
			})
		}
		if (!this._token) return Promise.reject('Sem token!')
		return Util.fetchSongStreamURL(url, this._token);
	};
	
	async get(query = this.query) {
		query = this.isUrl(query)[0] || query
		if (query.startsWith('https://')) {
			query = await this.getOriginalUrl(query)
			query = query.split('?ref=')[0]
		}
		
		const User = this.isUrlScdl(query, 'user');
		const Track = this.isUrlScdl(query, 'track');
		const Playlist = this.isUrlScdl(query, 'playlist');
		const Artist = this.isUrlScdl(query, 'artist')?.pop() || null
		const [url] = Track || Playlist || Artist && [Artist] || User || []
		const input = Track ? this.getSongInfo(url) : Playlist ? this.getPlaylist(url) : (Artist || User) ? this.getUser(url) : this.search(query)
		const rrees = (f) => {
			const { size, sizeBytes } = this.sizeBytesFile(f)
			return Promise.resolve({ result: f, quality: '128 Kbps', size, sizeBytes })
		}
		return input.then(song => {
			if (Array.isArray(song)) {
				song.map(v => Object.assign(v, {
					get: () => this.get(v.url)
				}))
			} else if (('streams' in song)) {
				const duration = Number(`${song.duration}`.replaceAll('000', ''))
				const progressive = song.streams.progressive
				song = {
					type: 'track',
					id: Number(song.id),
					title: song.title,
					description: song.description,
					url: song.url,
					image: song.thumbnail,
					play: Number(song.playCount),
					genre: song.genre,
					commentsCount: Number(song.commentsCount),
					publishedAt: song.publishedAt,
					timestamp: this.convertSforM(duration),
					seconds: duration,
					author: song.author,
					download: () => {
						return this.getUrlDownload(progressive).then(v => ({ result: v, quality: '128 Kbps', size: 0 }))
					}
				}
			} else if (('tracks' in song)) {
				song.type = Playlist ? 'playlist': 'tracks'
				song.tracks.map(v => Object.assign(v, {
					get: () => this.get(v.url)
				}))
			}
			return Promise.resolve(song)
		});
	};
	
}