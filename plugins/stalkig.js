let fetch = require('node-fetch')
const { fetchJson } = require('../utils/fetcher');
const fs = require('fs');
const setting = require("../lib/setting.json");

let {
    cakrayp,
  } = setting;

module.exports = handler = async (m, { conn, usedPrefix }) => {

let body = m.text;
const args = body.trim().split(/ +/).slice(1);
const mess = {
    error: {
        Ig: "[❗] Terjadi kesalahan, mungkin karena akunnya private"
    }
}

if (args.length == 0)
    return conn.reply(
        m.chat,
        `*[ STALKING IG ]*\n\nUntuk stalking akun instagram seseorang, ketik *${usedPrefix}igstalk username*\n\nContoh:\n*${usedPrefix}igstalk 4ndrexyz_*`,
        m
    );
    conn.reply(m.chat, mess.wait, m);
    fetchJson(
    `https://cakrayp.herokuapp.com/api/instagram/stalk/?username=${body.slice(
        9
    )}&apikey=${cakrayp}`
    )
    .then(async (res) => {
        if (res.status == false)
        return conn.reply(m.chat, res.message.info, m);
        const profilepicx = res.result.profile_pic;
        const usernamex = res.result.username;
        const fullnamex = res.result.fullname;
        const igprivatex = res.result.private;
        const igverifiedx = res.result.verified;
        const bioinstagramx = res.result.biography;
        const followersigx = res.result.followers;
        const followingigx = res.result.following;
        const profileurlx = res.result.profile_url;
        const externalinkx = res.result.mediadata.external_link;
        const mediaresultx = res.result.mediadata.feed_totally;
        const igtxn1 = `*[ STALKING IG ]*\n\n✦ Username: *${usernamex}*\n✦ Nama: *${fullnamex}*\n✦ Private: *${igprivatex}*\n✦ Verified: *${igverifiedx}*\n✦ Followers: *${followersigx}*\n✦ Following: *${followingigx}*\n✦ Total Posts: *${mediaresultx}*\n✦ Url Profile:\n*${profileurlx}*\n✦ External Url:\n*${externalinkx}*\n✦ Bio:\n${bioinstagramx}`;
        await conn.sendFileFromUrl(
        m.chat,
        profilepicx,
        "profile.jpg",
        igtxn1,
        m
        )
    })
    .catch((err) => {
        console.log(err);
        conn.reply(m.chat, err.message, m);
    });
}
        
handler.help = ['igstalk'].map(v => v + ' (username)')
handler.tags = ['downloader']
handler.command = /^(stalkig|igstalk)$/i;
handler.limit = true
module.exports = handler;
