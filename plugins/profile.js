let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let str = `
✦ Username: *@${who.replace(/@.+/, '')}*
✦ Nama: *${registered ? '' + name + '': ''}* 
✦ Umur: *${registered ? + age + ' Tahun' : '' }*
✦ EXP: *${exp} XP* (${exp - min} / ${xp})
✦ Level: *${level}*
✦ Role: *${role}*
✦ Limit: *${limit}*
✦ Premium: *${prem ? 'Iya' : 'Tidak'}*
✦ Registrasi: *${registered ? 'Terverifikasi ✅' : 'Belum ⛔️'}*
✦ Nomor WhatsApp: 
    *${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}*
`.trim()
    let mentionedJid = [who]
    conn.send2ButtonImg(m.chat, pp, str, author, 'Menu', `${usedPrefix}menu`, 'Cek SN', `${usedPrefix}ceksn`, m, false, { contextInfo: { mentionedJid }})
  }
}

handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^(profile|profil)$/i
module.exports = handler

