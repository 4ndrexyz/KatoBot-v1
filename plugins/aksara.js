let fetch = require('node-fetch')

let handler = async (m, { args, usedPrefix, command }) => {
    let er = `
╭────[ *OPSI* ]
│ » latinkejawa
│ » latinkesunda
│ » jawakelatin
│ » sundakelatin
╰─────

Contoh:
*${usedPrefix + command} latinkejawa Selamat Pagi*
    `.trim();
    if (!args[0]) throw er
    switch (args[0].toLowerCase()) {
        case 'latinkejawa':
        case 'latinkesunda':
        case 'jawakelatin':
        case 'sundakelatin':
            let text = args.slice(1).join(' ')
            let res = await fetch(API('xteam', '/aksara/' + args[0].toLowerCase(), { text }, 'APIKEY'))
            if (!res.ok) throw await res.text()
            let json = await res.json()
            if (!json.status) throw json
            m.reply(json.message)
            break
        default:
            throw er
    }
}
handler.help = ['aksara']
handler.tags = ['tools']
handler.command = /^aksara$/i

handler.limit = 1

module.exports = handler