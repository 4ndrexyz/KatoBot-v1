let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, text, participants }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let users = participants.map(u => u.jid)
  m.reply(
    text + '*[ TAG ALL ]*\n' + who.map(who => '@' + who.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['tagall']

handler.admin = true
handler.group = true

module.exports = handler
