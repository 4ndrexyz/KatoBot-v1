let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (id in conn.tebakkimia) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkimia[id][0])
        throw false
    }
    let res = await fetch(global.API('http://zekais-api.herokuapp.com', '/tebakunsur'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    let caption = `
*[ TEBAK KIMIA ]*


*"Nama unsur dari lambang ${json.simbol} adalah..."*


Timeout: ${(timeout / 1000).toFixed(2)} detik
Bonus: ${poin} XP

Ketik *${usedPrefix}teki* untuk bantuan
`.trim()
    conn.tebakkimia[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia[id]) conn.sendButton(m.chat, `*Waktu habis !!*\n\nJawabannya adalah *${json.name}*`, author, 'Tebak Kimia', '.tebakkimia', conn.tebakkimia[id][0])
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i

module.exports = handler