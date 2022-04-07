async function handler(m) {
    if (!m.quoted) throw 'Reply pesan!'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'Pesan yang anda reply tidak mengandung reply!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i
module.exports = handler