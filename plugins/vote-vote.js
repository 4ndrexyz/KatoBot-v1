let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(
      m.chat,
      `Tidak ada voting di chat ini!`,
      "© 4ndrexyz",
      "Mulai",
      `${usedPrefix}+vote`,
      conn.vote[id][3]
    );
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Kamu sudah vote!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    let [reason, upvote, devote] = conn.vote[id]
    conn.send2Button(
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
      "© 4ndrexyz",
      "Upvote",
      `${usedPrefix}upvote`,
      "Devote",
      `${usedPrefix}devote`,
      m
    );
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i

module.exports = handler