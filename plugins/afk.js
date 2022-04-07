let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`${conn.getName(m.sender)} Sekarang AFK ${text ? ' dengan alasan ' + text : ''}
`)
}
handler.help = ['afk (alasan)']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
