let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/ighighlight', {
    nama: args[0]
  }, '5dda1e0e5980d5d9'))
  let json = await res.json()
  if (json.result.error) throw json.result.message
  let { username, items } = json.result
  for (let { thumbnail, isVideo, url } of items) {
    thumbnail = await (await fetch(thumbnail)).buffer()
    conn.sendFile(m.chat, url, 'ig' + (isVideo ? '.mp4' : '.jpg'), `@${username}`, m, false, {
      thumbnail
    })
  }
}
handler.help = ['ighighlight'].map(v => v + ' (username)')
handler.tags = ['downloader']

handler.command = /^(ighighlight?)$/i

module.exports = handler
