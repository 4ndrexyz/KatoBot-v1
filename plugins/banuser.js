let handler = async (m, { conn, text }) => {
    if (!text) throw "Siapa disini yang mau di _Banned_ ? 🖐🏻";
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah..'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `*Berhasil dibanned !*`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
