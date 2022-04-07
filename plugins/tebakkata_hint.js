let handler = async (m, { conn }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (!(id in conn.tebakkata)) throw false
    let json = conn.tebakkata[id][1]
    let ans = json.result.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    m.reply('```' + clue + '```' + '\n\nNote:\n*Reply soalnya* untuk menjawab')
}
handler.command = /^teka$/i
handler.limit = true
module.exports = handler