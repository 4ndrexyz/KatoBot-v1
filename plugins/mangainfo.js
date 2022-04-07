let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan judul manganya !`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
let mangaingfo = `
Judul: *${title}*
Chapter: *${chapters}*
Volume: *${volumes}*
Score: *${score}*
Sinopsis: *${synopsis}*
Link: _${url}_`
  conn.sendFile(m.chat, image_url, '', mangaingfo, m)
}
handler.help = ['manga (judul)']
handler.tags = ['internet']
handler.command = /^(manga)$/i
//udah di maapin kan?
module.exports = handler
