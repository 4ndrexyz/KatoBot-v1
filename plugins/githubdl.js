let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'Usernamenya mana ?'
if (!args[1]) throw 'Reponya mana ?'

let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/main.zip`
//ByRizkyAdi
m.reply(`compressing data to file zip*`)
conn.sendFile( m.chat, url, 'repo.zip', null, m)

}
handler.help = ['githubdl']
handler.tags = ['download']
handler.command = /githubdl/i

handler.limit = true

module.exports = handler
