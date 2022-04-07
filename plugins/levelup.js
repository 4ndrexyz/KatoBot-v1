let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    let role = global.db.data.users[who]
    throw `
Level kamu *${user.level} (${user.exp - min}/${xp})*\n
Kurang *${max - user.exp}* lagi!
`.trim()
  }
  let role = global.db.data.users[who]
  let username = conn.getName(who)
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
m.reply(`
*LEVEL UP !!* ⬆️

✯ Nama: *@${who.replace(/@.+/, '')}*
✯ Level: *${before}* ➠ *${user.level}*
✯ Role: *${role}*

Untuk melihat profil kamu ketik
*.profile*
	`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

module.exports = handler
