let handler = async (m, {conn, usedPrefix}) => {
let profile = './images/Kato/10.jpg'
let str = `
*[ SOURCE CODE ]*
    
Github: github.com/4ndrexyz/KatoBot-v1
    
`.trim()
    conn.send2ButtonImg(m.chat, profile, str, "\n4ndrexyz" , "Menu", `${usedPrefix}menu`, "Owner", `${usedPrefix}owner`, m)
}
    
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc$/i
    
module.exports = handler