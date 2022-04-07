let fs = require('fs')
let fetch = require('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked,usedPrefix }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? '4ndrexyz bot lagi istirahat' : banned ? 'kamu dibanned' : '4ndrexyz bot disini !',
                '',
                isBanned ? 'Unban' : banned ? 'Owner' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.menu',
                m.isGroup ? 'Owner' : isBanned ? 'Donasi' : 'Donasi',
                m.isGroup ? '.nowner' : isBanned ? '.donasi' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // Terimakasih
    let thanks = /(terima?kasih|makasih|maacih|tengkyuh|thanks|thx)/i
    let isThanks =  thanks.exec(m.text)
    if (isThanks && !m.fromMe) {
        m.reply(`Sama-sama, senang bisa membantu kamu 🤞🏼`)
    }

    // Salam
    let salam = /(assalamualaikum|assalamu'alaikum|asalamu'alaikum|asalamualaikum)/i
    let isSalam = salam.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`Wa'alaikumus salam warahmatullahi wabarakatuh 🙏🏼`)
    }

    // Hallo
    let hallo = /(halo?bot)/i
    let isHalo = hallo.exec(m.text)
    if (isHalo && !m.fromMe) {
        m.reply(`Hallo Ada yang bisa bot bantu ??\n\nKetika *.menu* untuk melihat semua perintah bot`)
    }

    // kalo mau ditambahkan silahkan !
}

module.exports = handler