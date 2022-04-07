let handler = async (m, { conn, text }) => {
  if (!text) return
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw "Tag salah satu lah 😤";
  txt = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, txt || conn.getName(who), m)
}
handler.help = ['save'].map(v => v + ' @user (nama kontak)')
handler.tags = ['']

handler.command = /^save$/

module.exports = handler
