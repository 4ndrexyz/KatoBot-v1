// let levelling = require('../lib/levelling')
// module.exports = {
// 	before(m) {
// 		let user = global.db.data.users[m.sender]
// 		if (!user.autolevelup) return !0
// 		let before = user.level * 1
// 		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

// 		if (before !== user.level) {
// 			m.reply(`
// *LEVEL UP !!*
	
// ✯ Level: *${before}* ➠ *${user.level}* ✯
				
// Untuk melihat profil ketik *${usedPrefix}profile*
// 	`.trim())
// 		}
// 	}
// }

let handler = m => m

let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
handler.before = async function (m, {conn, usedPrefix}) {
        let user = global.db.data.users[m.sender]
        let users = Object.entries(global.db.data.users).map(([key, value]) => {
                return { ...value, jid: key }
        })
        let pp = './src/avatar_contact.png'
        let who = m.sender
        let role = global.db.data.users[m.sender].role
        let exp = global.db.data.users[m.sender].exp
        let logo = global.levelup
        let discriminator = who.substring(9, 13)
        let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
        let usersLevel = sortedLevel.map(enumGetKey)
        let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
        let username = conn.getName(who)
        try {
            pp = await this.getProfilePicture(who)
        } catch (e) {

        } finally {

                if (!user.autolevelup) return !0
                let before = user.level * 1
                while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

                if (before !== user.level) {
                        {
                        	let tag = `@${m.sender.replace(/@.+/, '')}`
                        	let mentionedJid = [m.sender]
                                        await this.sendButtonLoc(m.chat, logo, `*LEVEL UP !!\n\n*Nama: *${tag}*\nRole: *${role}*\nExp: *${exp}* XP\nLevel: *${before}* ➠ *${user.level}*\n`.trim(), author, 'Profile', `${usedPrefix}profile`, m, { contextInfo: { mentionedJid }})
                                }
                }
        }
}
module.exports = handler

function sort(property, ascending = true) {
        if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
        else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
        if (property) return (a, i, b) => {
                return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
        }
        else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
        return a.jid
}