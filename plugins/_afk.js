module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
      m.reply(`
${conn.getName(m.sender)} berhenti AFK ${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}
`.trim())
      user.afk = -1
      user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
      let user = global.db.data.users[jid]
      if (!user) continue
      let afkTime = user.afk
      if (!afkTime || afkTime < 0) continue
      let reason = user.afkReason || ''
      m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\n
Selama *${clockString(new Date - afkTime)}*
`.trim())
    }
    return true
  }
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) + (d == 0 ? " Jam, " : " Jam, ")
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 + (d == 0 ? " Menit, " : " Menit, ")
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 + (d == 0 ? " Detik" : " Detik")
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join('')
}

function waktu(seconds) {
  // TOBZ
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " Hari," : " Hari,") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " Jam," : " Jam,") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " Menit," : " Menit,") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " Detik," : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
