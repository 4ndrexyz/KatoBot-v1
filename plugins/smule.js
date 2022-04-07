let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  global.API('xteam', '/dl/smule', {
    url: args[0]
  }, '5dda1e0e5980d5d9')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [].map(v => v + ' (url)')
handler.tags = ['downloader']

handler.command = /^\x00s$/i

module.exports = handler
