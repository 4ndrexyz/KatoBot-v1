let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, '5dda1e0e5980d5d9'), '', 'drag joKes', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler
