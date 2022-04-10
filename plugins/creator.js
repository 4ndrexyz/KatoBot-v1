let handler = async function (m, { conn }) {
  let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
    let name = db.data.users[i] ? db.data.users[i].name : conn.getName(i)
    list.push({
      "displayName": "4ndrexyz",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:4ndrexyz\nitem1.TEL;waid=6285158599235:0\nitem1.X-ABLabel:Owner Kato Bot\nitem5.X-ABLabel:Terimakasih sudah menggunakan Kato Bot\nEND:VCARD"
    },
    {
      "displayName": "Kato Bot",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Kato Bot\nitem1.TEL;waid=6283123133759:0\nitem1.X-ABLabel:Bot WhatsApp\nEND:VCARD"
    }
    )
  }
  await conn.sendMessage(m.chat, {
    "displayName": `Owner & Bot`,
    "contacts": list
  }, 'contactsArrayMessage', { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler