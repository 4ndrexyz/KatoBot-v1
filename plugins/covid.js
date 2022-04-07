let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {
    let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (args[0] || '')))
    if (!res.ok) throw await res.text()
        let json = await res.json()
    if (!args[0]) throw `Contoh :\n${usedPrefix}${command} ID\n\n` + json.countries.map((v) => `${v.name} : ${v.iso2} / ${v.iso3}`).join('\n')
  if (json.confirmed) m.reply(`
Negara : ${args[0]}
Terkonfirmasi : ${json.confirmed.value}
Pulih : ${json.recovered.value}
Meninggal Dunia : ${json.deaths.value}
Terakhir Diupdate : ${json.lastUpdate}
\n\n@ 4ndrexyz`.trim())
  else throw json
}
handler.help = ['covid'].map(v => v + ' (negara)')
handler.tags = ['internet']
handler.command = /^(corona|covid|covid19)$/i
//susu
module.exports = handler
