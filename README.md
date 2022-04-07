<div align="center">
  <a href="https://github.com/4ndrexyz/KatoBot-v1">
    <img src="images/Kato/5.jpg" alt="Logo" width="200" height="200">
  </a>
  <h2 align="center">Kato Bot</h2>

<p align="center">
<a href="https://github.com/4ndrexyz"><img title="Author" src="https://img.shields.io/badge/Author-4ndrexyz-blue.svg?style=flat&logo=github"></a>
<p align="center">
</div>

<p align="center">
 <img src="https://github-readme-stats.vercel.app/api/pin/?username=4ndrexyz&repo=KatoBot-v1&bg_color=20,e96443,904e89&title_color=fff&text_color=fff&icon_color=fff&hide_border=true&show_icons=true&show_owner=true" />
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=4ndrexyz&repo=KatoBot-v2&bg_color=20,e96443,904e89&title_color=fff&text_color=fff&icon_color=fff&hide_border=true&show_icons=true&show_owner=true" />
</p>
 
## TERMUX / UBUNTU / SSH USER

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
apt install imagemagick -y
git clone https://github.com/4ndrexyz/KatoBot-v1.git
cd KatoBot-v1
npm install
npm update
```

## INSTALL ON TERMUX WITH UBUNTU

#### INSTALLING UBUNTU

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

#### INSTALLING REQUIRED PACKAGES

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

#### INSTALLING NODEJS & Andrexyz Bot

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/4ndrexyz/KatoBot-v1
cd KatoBot-v1
npm install
npm update
```

---------

## WINDOWS / VPS / RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/4ndrexyz/KatoBot-v1.git
cd KatoBot-v1
npm install
npm update
```

---------


## DEPLOY HEROKU
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/4ndrexyz/KatoBot-v1)

## RUN

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--session <file name>`

Use another session with another name, default is ```session.data.json```

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--db <json-server-url>`

Use external db instead of local db, 
Example Server `https://json-server.narutomo.repl.co/`

Code: `https://repl.it/@narutomo/json-server`

`node . --db 'https://json-server.narutomo.repl.co/'`

The server should have like this specification

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

If small qr unicode doesn't support

### `--img`

Enable image inspector through terminal

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```


```js
anticall: false, // Auto Reject better than autoblock
autoread: false, // If true all chats are automatically read
nyimak: false, // No bot, just print received messages and add users to database
restrict: false, // Enables restricted plugins (which can lead your number to be banned if used too often)
self: false, // Activate self mode (Ignores other)
pconly: false, // If that chat not from private bot, bot will ignore
gconly: false, // If that chat not from group, bot will ignore
jadibot: false, 
```

-----------------------------

## Thanks to
- [WA-Automate](https://github.com/open-wa/wa-automate-nodejs)
- [Narutomo](https://github.com/Nurutomo)
