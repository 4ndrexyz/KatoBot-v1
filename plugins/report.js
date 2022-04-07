// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Silahkan masukkan laporan'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
    const laporan = `*REPORT BOT*\n\nDari Nomor : wa.me/${m.sender.split`@`[0]}\nPesan : *${text}*`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6285158599235@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply(' Masalah telah di laporkan ke Owner Bot, jka laporan palsu atau hanya main - main tidak akan ditanggapi !')
}
handler.help = ['bug', 'report'].map(v => v + ' (laporan)')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
