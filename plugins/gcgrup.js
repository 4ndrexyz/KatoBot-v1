
let handler = async (m, {conn}) => {
let profile = './images/pp.jpg'
let str = `
*[ JOIN GRUP ]*

Link : 
https://chat.whatsapp.com/LB0SCncjj3B77pMnFHJfdj

`.trim()
    conn.send2ButtonImg(m.chat, profile, str, "\n4ndrexyz" , "Menu", '.menu', "Owner", '.owner', m)
}

module.exports = handler
handler.command = /^(gcgrup?)$/i