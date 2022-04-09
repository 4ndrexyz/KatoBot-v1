let handler = async (m, { conn, usedPrefix }) => {
  let id = m.chat;
  conn.absen = conn.absen ? conn.absen : {};
  if (!(id in conn.absen))
    return conn.sendButton(
      m.chat,
      `*Tidak ada absen berlangsung !*`,
      author,
      "Mulai",
      `${usedPrefix}+absen`,
      m
    );
  let absen = conn.absen[id][1];
  const wasVote = absen.includes(m.sender);
  if (wasVote) throw "*Kamu sudah absen hari ini*";
  absen.push(m.sender);
  let d = new Date();
  let date = d.toLocaleDateString("id", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  let list = absen.map((v, i) => `│ » ${i + 1}.  @${v.split`@`[0]}`).join("\n");
  let caption = `
Hari: *${week}*
Tanggal: *${date}*

Total: *${absen.length} orang*

${conn.absen[id][2] ? conn.absen[id][2] + "\n" : ""}
╭────[ *DAFTAR ABSEN* ]
│
${list}
│
╰─────`.trim();
  await conn.send2Button(
    m.chat,
    caption,
    author,
    "Absen",
    `${usedPrefix}absen`,
    "Cek",
    `${usedPrefix}cekabsen`,
    m
  );
};
handler.help = ["absen"];
handler.tags = ["absen"];
handler.command = /^(absen|hadir|present)$/i;

module.exports = handler;
