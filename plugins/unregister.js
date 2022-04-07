const { createHash } = require('crypto')
let handler = async function (m, {conn, args, usedPrefix }) {
  if (!args[0]) throw `Serial Number kosong\nHarap Check Serial Number kamu\nKetik:\n${usedPrefix}ceksn`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number salah !'
  user.registered = false
  let str = `*Unregister berhasil* ✅`
  conn.sendButton(m.chat, str, '4ndrexyz', 'Registrasi','.daftar' ,m)
}

handler.help = ['', 'ister'].map(v => 'unreg' + v + ' (SN)')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

