let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(
      m.chat,
      `Tidak ada voting di chat ini!`,
      "© 4ndrexyz",
      "Mulai",
      `${usedPrefix}+vote`,
      m
    );
    let [reason, upvote, devote] = conn.vote[id]
    conn.sendButton(
      m.chat,
      `
[ *VOTING* ]

Alasan: *${reason}*

╭────[ *Upvote* ]
│ Total: *${upvote.length}*
│
│ ${upvote.map((u) => "@" + u.split("@")[0]).join("\n")}
│
╰─────

╭────[ *Devote* ]
│  Total: *${devote.length}*
│
│  ${devote.map((u) => "@" + u.split("@")[0]).join("\n")}
│
╰─────
`.trim(),
      "4ndrexyz",
      "Hapus",
      `${usedPrefix}-vote`,
      m
    );
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i

handler.group = true

module.exports = handler