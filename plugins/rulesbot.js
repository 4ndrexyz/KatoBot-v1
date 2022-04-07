let handler = async (m, {conn}) => {
let profile = './images/Kato/5.jpg'
let str = `
*[ RULE BOT ]*

- Bot berjalan di Web Deployment yang Free
- Bot off jika gw ga punya internet
- Bot ini memakai Free API Key
- Jangan SPAM biar ga delay
- SC bot ini adalah @narutomo
`.trim()
    conn.send2ButtonImg(m.chat, profile, str, "\n4ndrexyz" , "Menu", '.menu', "Owner", '.owner', m)
}

module.exports = handler
handler.command = /^(rulesbot?)$/i