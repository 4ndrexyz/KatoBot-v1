let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, '*Masih ada soal belum terjawab !*', conn.caklontong[id][0])
        throw false
    }
    if (!src) src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*[ CAK LONTONG ]*


*"${json.soal}"*


Timeout: ${(timeout / 1000).toFixed(2)} detik
Bonus: ${poin} XP

Ketik *${usedPrefix}calo* untuk bantuan.
`.trim()
    conn.caklontong[id] = [
        await conn.sendButton(m.chat, caption, author, 'Bantuan', `${usedPrefix}calo`, m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) conn.sendButton(m.chat, `*Waktu habis !!*\n\nJawabannya adalah *${json.jawaban}*\n\n${json.deskripsi}`, author, 'Cak Lontong', `${usedPrefix}caklontong`, conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

module.exports = handler
