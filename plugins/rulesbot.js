let handler = async (m, {conn, usedPrefix}) => {
let profile = './images/Kato/5.jpg'
let str = `
*[ RULE BOT ]*

- Bot off jika gw ga ada internet
- Bot ini memakai Free API
- Jangan *SPAM !* di grup/chat
- Gunakan bot dengan baik

`.trim()
    conn.send2ButtonImg(m.chat, profile, str, "\n4ndrexyz" , "Menu", `${usedPrefix}menu`, "Owner", `${usedPrefix}owner`, m)
}

module.exports = handler
handler.command = /^(rulesbot?)$/i