let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Nih Megumin nyaaa', m)
}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i
//ftwrr
module.exports = handler
