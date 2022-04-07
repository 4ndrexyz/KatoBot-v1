module.exports = Object.assign(async function handler(m, { conn, text, command, usedPrefix }) {
    let which = command.replace(/(un)?lock/i, '')
    if (!text) return conn.sendButton(
      m.chat,
      `Teksnya mana ?\n\nContoh:\n*${usedPrefix + command} tes*`,
      "© 4ndrexyz",
      "Daftar Pesan",
      `${usedPrefix}list${which}`,
      m
    );
    let msgs = db.data.msgs
    if (!(text in msgs)) return conn.sendButton(
      m.chat,
      `'${text}' Tidak terdaftar!`,
      "© 4ndrexyz",
      "Daftar Pesan",
      `${usedPrefix}list${which}`,
      m
    );
    msgs[text].locked = !/^un/i.test(command)
    m.reply('Berhasil dikunci!')
}, {
    rowner: true,
    help: ['un', ''].map(v => v + 'lockmsg'),
    tags: ['database'],
    command: /^(un)?lock(vn|msg|video|audio|img|stic?ker|gif)$/i
})