let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/blowjob')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error !'
  conn.sendFile(m.chat, json.url, '', 'Anda sange sama 2D', m)
}
handler.help = ['nsfw']
handler.tags = ['anime']
handler.command = /^(nsfw)$/i
//ftwrr
module.exports = handler
