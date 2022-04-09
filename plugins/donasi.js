let handler = async (m, {conn, usedPrefix}) => {
let profile = './src/andrexyz.jpg'
let str = `
*[ DONASI ]*

Yuk donasinya kakak,
Bayar seikhlasnya aja :)

✦ Pulsa : 089525618110
✦ OVO   : 089525618110
✦ Dana  : 089525618110

`.trim()
    conn.send2ButtonImg(m.chat, profile, str, author , "Menu", `${usedPrefix}menu`, "Owner", `${usedPrefix}owner`, m)
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler