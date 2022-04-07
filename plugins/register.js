const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = './src/avatar_contact.png'
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e){

  } finally {

  if (user.registered === true) throw `Kamu sudah terdaftar !\n\nJika ingin daftar ulang ketik\n*${usedPrefix}unreg (SN)*`
  if (!Reg.test(text)) throw `Kamu belum *Terverifikasi !*\n\nSilahkan ketik *.daftar nama.umur* untuk registrasi\n\nContoh:\n*${usedPrefix}daftar Andre.18*`
  // if (user.registered === false) throw `Ketik *.daftar nama.umur* untuk registrasi\n\nContoh:\n*${usedPrefix}daftar andre.18*`
  // if (!Reg.test(text)) throw `Format yang kamu masukkan salah !\n\nContoh:\n*${usedPrefix}daftar Andre.18*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong !'
  if (!age) throw 'Umur tidak boleh kosong !'
  age = parseInt(age)
  if (age > 60) throw 'Kamu terlalu tua'
  if (age < 5) throw 'Dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let str =
    `
*Registrasi Berhasil* ✅ 

» Nama: *${name}*
» Umur: *${age} Tahun*
» SN: _*${sn}*_

Lupa Serial Number (SN) ?\nketik *${usedPrefix}ceksn*
`.trim()
  let mentionedJid = [who]
    conn.send2ButtonImg(m.chat, pp, str, '\n4ndrexyz', 'Menu','.menu', 'Cek SN','.ceksn', false, { contextInfo: { mentionedJid }})
  }
}

handler.help = ['daftar', 'reg', 'register'].map(v => v + ' (nama).(umur)')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

