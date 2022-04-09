let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
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

let before = user.level * 1
while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
m.reply (`
*LEVEL UP !!*

✯ Level : *${before}* ➠ *${user.level}* ✯

Untuk melihat profil ketik *${usedPrefix}profile*
`.trim())
  }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

module.exports = handler
