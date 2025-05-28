"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib = require('../lib');
const yts = require('yt-search'); // 2.11.0
exports.YouTube = void 0;
exports.YouTube = class YouTube {
	constructor({ query, format }) {
		Object.assign(this, lib)
		this.query = String(query)
		this.format = String(format)
	}
	
	isUrlYt(url) {
		return url?.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/user\/\S+|\/shorts\/|\/playlist\?list=|\/)([^\s?&]+)/)
	};
	
	get(query = this.query) {
		const [url, id] = this.isUrlYt(query) || []
		let config = query
		if (url && /playlist/.test(url)) {
			config = { listId: id }
		} else if (url) {
			config = { videoId: id }
		}
		return yts(config).then(data => {
			if (config.videoId) {
				data.type = 'track'
				data.download = async () => {
					try {
						const res = await this.promise([
							this.ytConv(config.url, this.format),
							this.ytSocial(config.url, this.format),
							this.genyt(config.videoId, this.format),
							this.y2matego(config.videoId, this.format)
						], 'any')
						return Promise.resolve(res)
					} catch (error) {
						return Promise.reject(error)
					}
				}
			} else {
				data.type = config.listId ? 'playlist' : 'video'
				data.videos.map(v => Object.assign(v, {
					get: () => this.get('https://youtube.com/watch?v='+v.videoId)
				}))
			}
			return Promise.resolve(data)
		});
	};
	
}