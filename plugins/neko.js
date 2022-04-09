// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Maaf Error, coba lagi nanti'
  conn.sendFile(m.chat, json.url, '', 'Nyaaa... >_<', m)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^neko$/i

module.exports = handler
