"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib = require('../lib');
const diretory = __dirname;
const fetch = require('node-fetch')
const BASE_URL = 'https://api.deezer.com/';
const imgUrl = (id) => 'https://e-cdns-images.dzcdn.net/images/cover/'+id+'/1000x1000-000000-80-0-0.jpg'
exports.Deezer = void 0;
exports.Deezer = class Deezer {
	constructor({ query }) {
		Object.assign(this, lib)
		this.query = query
	}

	isUrlDz(url) {
		url = url?.replace(/\/de\//g, '') || ''
		const regex = /^https?:\/\/(?:www\.)?deezer(?:\.com\/|\.page\.link\/)(?:[a-z]{2}\/)?(track|album|playlist|artist)\/(\d+)\/?(?:\?.*?)?$/;
		return regex.test(url) && url.match(regex)
	};
	
	async get(query = this.query) {
		query = this.isUrlDz(query)[0] || query
		if (/deezer\.page\.link/.test(query)) {
			query = await this.getOriginalUrl(query)
		}
		
		let [_, type, id] = this.isUrlDz(query) || []
		const typeTag = type ? type+'/' : 'search?q='
		id = id || encodeURIComponent(query)
		if (!id) return Promise.reject('Não a nada no campo de texto/id')
		
		return fetch(BASE_URL+typeTag+id).then(v => v.json()).then(({ data }) => {
			if (/playlist|album/.test(data.type)) {
				data = {
					...this.formatObject(data, data.type),
					tracks: this.formatObject(data.tracks.data.map((o, i) => Object.assign(o, {
						'track_position': (i+1),
						'disk_number': data.tracks.data.length
					})), 'track')
				}
			} else if (Array.isArray(data)) {
				data.map(v => Object.assign(this.formatObject(v, v.type), {
					get: () => this.get(v.link)
				}))
			} else if (('tracks' in data)) {
				data.type = data.type === 'album' ? 'playlist' : 'tracks'
				data.tracks = data.tracks.data.map(v => Object.assign(this.formatObject(v, v.type), {
					get: () => this.get(v.link)
				}))
				delete data.tracks.data
			} else {
				data = this.formatObject(data, data.type)
			}
			return Promise.resolve(data)
		})
	};
	
	formatObject(items, type) {
		if (Array.isArray(items)) {
			return items.map((o, i) => this.formatObject(o, type || o.type))
		} else {
			switch (type || items.type) {
				case 'track':
					return {
						id: (items?.id || 0),
						title: items?.title,
						url: items?.link,
						image: imgUrl(items.md5_image),
						timestamp: this.convertSforM(items?.duration),
						seconds: items?.duration,
						track: (('track_position' in items) ? items['track_position']+'/'+item['disk_number'] : '1/1'),
						preview: items?.preview,
						publishedAt: (items?.release_date ? new Date(item['release_date']) : ''),
						date: (items?.release_date || ''),
						author: this.formatObject(items.artist, 'artist'),
						download: () => this.deezerDl(items.track_token, items.link)
					}
				case 'album':
					return {
						...this.formatObject(items, 'artist'),
						publishedAt: new Date(items['release_date']),
						date: items['release_date'],
						tracks: this.formatObject(items?.tracks?.data || [], 'track')
					}
				case 'artist':
					return {
						id: items.id,
						url: items.link,
						name: items.name,
						image: items.picture_xl,
						genres: (items?.genres?.data || []).map(v => v.name),
						followers: (items?.nb_fan || 0)
					}
				default:
				return items
			}
		}
	};
	
}