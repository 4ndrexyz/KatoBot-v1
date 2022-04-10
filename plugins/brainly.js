module.exports = handler = async (m, { conn, usedPrefix }) => {

  let body = m.text;
  const args = body.trim().split(/ +/).slice(1);

  if (args.length >= 2) {
  const BrainlySearch = require("../lib/brainly");
  let tanya = body.slice(9);
  let jum = Number(tanya.split(".")[1]) || 2;
  if (jum > 10) return conn.reply(m.chat, "Max 10!", m);
  if (Number(tanya[tanya.length - 1])) {
    tanya;
  }
  conn.reply(
    m.chat,
    `*[ SOAL ]*\n\n➸ Soal: ${
      tanya.split(".")[0]
    }\n➸ Jumlah jawaban: ${Number(jum)}`,
    m
  );
  await BrainlySearch(
    tanya.split(".")[0],
    Number(jum),
    function (res) {
      res.forEach((x) => {
        if (x.jawaban.fotoJawaban.length == 0) {
          conn.reply(
            m.chat,
            `*[ JAWABAN ]*\n\nSoal yang sama:\n${x.pertanyaan}\n\n➸ Jawaban:\n${x.jawaban.judulJawaban}\n`,
            m
          );
          conn.sendText(m.chat, "Selesai..", m);
        } else {
          conn.reply(
            m.chat,
            `*[ JAWABAN ]*\n\nSoal yang sama:\n${x.pertanyaan}\nJawaban:\n${
              x.jawaban.judulJawaban
            }\n\n➸ Link foto jawaban: ${x.jawaban.fotoJawaban.join(
              "\n"
            )}`,
            m
          );
        }
      });
    }
  );
} else {
  conn.reply(
    m.chat,
    `*[ BRAINLY ]*\n\nCara Penggunaan:\n*${usedPrefix}brainly soal .jumlahsoal*\n\nContoh:\n*${usedPrefix}brainly Indonesia Merdeka .2*`,
    author,
    m
  );
}
}

handler.help = ['brainly']
handler.tags = ['internet']

handler.command = /^brainly$/i
module.exports = handler