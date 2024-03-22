const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const Canvas = require('canvas')
const canvasGif = require('canvas-gif')
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var timewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var timewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var timewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var timewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var timewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var timewisher = `Good Morning 🌄`
 } 
module.exports = HBWABotMz = async (HBWABotMz, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectdodoi.selectedRowId : (m.mtype == 'templateButtondodoiMessage') ? m.message.templateButtondodoiMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectdodoi.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await HBWABotMz.decodeJid(HBWABotMz.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await HBWABotMz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        if (!HBWABotMz.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            HBWABotMz.readMessages([m.key])
        }
        if (global.autoTyping) {
        HBWABotMz.sendPresenceUpdate('composing', from)
        }
        if (global.autoRecording) {
        HBWABotMz.sendPresenceUpdate('recording', from)
        }
        HBWABotMz.sendPresenceUpdate('unavailable', from)        
        if (global.autorecordtype) {
        let herbertrecordin = ['recording','composing']
        let herbertrecordinfinal = herbertrecordin[Math.floor(Math.random() * herbertrecordin.length)]
        HBWABotMz.sendPresenceUpdate(herbertrecordinfinal, from)
        }	
        const dodoi = (teks) => {
HBWABotMz.sendMessage(from, { text: teks
}, { quoted : m })
}
const loadingimg = ('https://raw.githubusercontent.com/PST-Zakima/database/main/thumbnail.json')
const loadingimg1 = await fetch(loadingimg)
const loadingimg2 = await loadingimg1.json()
const hellothumb = loadingimg2.hellothumb;
const diamondlist = loadingimg2.diamondlist
const vialogin = loadingimg2.vialogin
switch (command) {
case '-1':{
HBWABotMz.sendMessage(m.chat, { image: { url: `${diamondlist}` }, caption : `He mi chungchangah hian zawhna i neih chuan link hi hmet rawh\nhttps://api.whatsapp.com/send?phone=+919233844027&text=Ka+pu,+He+command+${command}ah+hian+hriatchian+loh+ka+nei!!\n\n> *©Zakima Lunghlu Dawr*` }, { quoted: m })
}
break

case '-2':{
HBWABotMz.sendMessage(m.chat, { image: { url: `${vialogin}` }, caption: `He mi chungchangah hian zawhna i neih chuan link hi hmet rawh\nhttps://api.whatsapp.com/send?phone=+919233844027&text=Ka+pu,+He+command+${command}ah+hian+hriatchian+loh+ka+nei!!\n\n> *©Zakima Lunghlu Dawr*` }, { quoted: m })
}
break

case '-3': {
    const even = await fetchJson('https://raw.githubusercontent.com/PST-Zakima/database/main/even.json');
    const mlbb_even = even.message
    const thuziak = `${mlbb_even}`;
    return dodoi(thuziak);
}
break;

case 'mkjson':{
  if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`)
  const thlakzuk = `${text.replace(/\n/g, '\\n')}`;
  await dodoi(`{\n"message":"${thlakzuk}",\n"author":"Pasaltha Zakima Lunghlu Dawr"\n}`);
}
break;

case 'hi': case 'hii': case 'hiii': case 'helo': case 'hello': case 'hlo': case 'recharge': case 'hey': case 'ml': case 'diamond':{ 
if (m.isGroup) return
var menuthla = await getBuffer(`${hellothumb}`)
await HBWABotMz.sendMessage(from, { text : `> *PASALṬHA ZAKIMA LUNGHLU DAWRAH KAN LO LAWM A CHE!!💎*

1. Diamond list en i duh chuan he message hi *-1* tiin reply rawh!!

2. VIA Login list en i duh chuan he message hi *-2* tiin reply rawh

3. Event hmanlai mek Recharge token i en duh chuan he message hi *-3* tiin reply rawh.

*WELCOME TO ZAKIMA'S DIAMOND STORE!!💎*

1. If you want to see the list of diamonds, please reply *-1* to this message!!

2. If you want to see the list of VIA Login, please reply *-2* to this message

3. If you want to view the Recharge token that is currently valid for the event, please reply *-3* to this message

> *©Zakima Lunghlu Dawr 💎*`,
contextInfo:{
externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: true,
title: `Zakima Lunghlu Dawr`,
thumbnail : menuthla,
mediaType: 1,
mediaUrl: ``,
sourceUrl: ``
}
}}, { quoted: m })
}
break


case '-dvideo': {
if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian type tur_\n*⟨Entirnan :* ${prefix + command} K hminga siar lalnu`)
const herbertvideo = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let kazawn = search.videos[0]
const vid=await herbertvideo.mp4(kazawn.url)
const ytc=`
╭═══════════┈
┃𒆜┌───┈
┃𒆜│ *Tittle:* ${vid.title}
┃𒆜│ *Date:* ${vid.date}
┃𒆜│ *Duration:* ${vid.duration}
┃𒆜│ *Quality:* ${vid.quality}
┃𒆜└───────────┈ 
╰════════════──┈`
await HBWABotMz.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break

case '-dsong': case '-song': case '-play': {
//Credit by HBMods-OFC
if (!text) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} K hminga siar lalnu`)
let yts = require("youtube-yts")
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper-sosmed')
let res = await yts(text)
let vid = res.videos[0]
let q = isVideo ? '360p' : '128kbps'
let v = vid.url
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
let title = await yt.title
let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
HBWABotMz.sendMessage(m.chat, {document: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: vid.title+`.mp3`, caption: `*${title}*

00:00 ───ㅇ───── ${vid.timestamp}
╭═══════════
*⚙️ Quality :* ${q}
*🕛 Duration :* ${vid.timestamp}
*👀 Viewers :* ${vid.views}
*♻️ Published :* ${vid.ago}
*💬 Url :* ${vid.url}
╰════════════`},{quoted:m})
}
break

case '-ytmp3':{
//Credit by HBMods-OFC
if (!args || !args[0]) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
if (!args[0].match(/youtu/gi)) dodoi ('Youtube link dik tak chauh rawn dah rawh')
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper-sosmed')
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const title = await yt.title
const size = await yt.audio[q].fileSizeH 
const ytcp=`*${title}*
╭═══════════
*⚙️Quality :* ${q}
*⚙️Size :* ${size}
*⚙️By ${global.botname}*
╰════════════`
HBWABotMz.sendMessage(m.chat, {document: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: title+`.mp3`, caption: ytcp},{quoted:m})
}
break

case '-s4': {
try {
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: global.author })    
} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break

case '-s3': {
try {
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: global.author })
} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break

case '-s2': {
try {
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: global.author })
} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break

case '-s': case '-sticker': case '-stiker': case '-stickers': { 
if (!quoted) return dodoi(`Thlalak emaw video rawn thawn la a caption-ah *${prefix+command}* tiin rawn dah rawh\nTi chuan sticker in ka rawn pe ang che`)
if (/image/.test(mime)) { 
let media = await quoted.download()
let encmedia = await HBWABotMz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if (((quoted.msg || quoted).seconds || 0) > 30) {
    return dodoi('Sorry, video chu second 30 aia tam sticker in ka siam thei lo')
}
let media = await quoted.download()
if (media.length > (1.9 * 1024 * 1024)) {
    return dodoi('Sorry, video chu 1.9MB aia tam sticker in ka siam thei lo')
}
let encmedia = await HBWABotMz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} 
else {
dodoi(`Thlalak emaw video rawn thawn la a caption-ah *${prefix+command}* tiin rawn dah rawh\nTi chuan sticker in ka rawn pe ang che`)
}
}
break

case '-s5': {
try {
if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: global.author })
} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break
case '-s6': {
    if (!q) return dodoi(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entirnan :* ${prefix + command} Hello World`) 
    Canvas.registerFont('./lib/SF-Pro.ttf', { family: 'SF-Pro' })
    let length = text.length
        
    var font = 90
    if (length>12){ font = 68}
    if (length>15){ font = 58}
    if (length>18){ font = 55}
    if (length>19){ font = 50}
    if (length>22){ font = 48}
    if (length>24){ font = 38}
    if (length>27){ font = 35}
    if (length>30){ font = 30}
    if (length>35){ font = 26}
    if (length>39){ font = 25}
    if (length>40){ font = 20}
    if (length>49){ font = 10}

    var ttp = {}
    ttp.create = Canvas.createCanvas(576, 576)
    ttp.context = ttp.create.getContext('2d')
    ttp.context.font = `${font}px SF-Pro`
    ttp.context.strokeStyle = 'black'
    ttp.context.lineWidth = 3
    ttp.context.textAlign = 'center'
    ttp.context.strokeText(text, 290, 300)
    ttp.context.fillStyle = 'white'
    ttp.context.fillText(text, 290, 300)
    
    var bufferx = ttp.create.toBuffer()    
    await HBWABotMz.sendImageAsSticker(m.chat, bufferx, m, { packname: global.packname, author: global.author })
}
break;
case '-s7': {
if (!args[0] && !m.quoted) {
return dodoi(`_🤖Kha tiang ringawt loh khan, tiang hian a i duh duh word nen rawn dah rawh_\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
}
let userPfp
if (m.quoted) {
try {
userPfp = await HBWABotMz.profilePictureUrl(m.quoted.sender, "image")
} catch (e) {
userPfp = defaultpp
}
} else {
try {
userPfp = await HBWABotMz.profilePictureUrl(m.sender, "image")
} catch (e) {
userPfp = defaultpp
}
}
const waUserName = pushname
const quoteText = m.quoted ? m.quoted.body : args.join(" ")
const quoteJson = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: waUserName,
photo: {
url: userPfp,
},
},
text: quoteText,
replyMessage: {},
},
],
}
try {
const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
headers: { "Content-Type": "application/json" },
})
const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
HBWABotMz.sendImageAsSticker(m.chat, buffer, m, {
packname: packname,
author: author,
})
} catch (error) {
console.error(error)
dodoi('Error')
}
}
break
  default:
        }
    } catch (err) {
    const h34 = ('https://raw.githubusercontent.com/HBMods-OFC/Base/master/HBWABot-Mz/Support.json')
let b34 = await fetch(h34)
let t34 = await b34.json()
const kajoin = t34.support
const spid = t34.supportid
let thusawi = await HBWABotMz.groupAcceptInvite(kajoin)
HBWABotMz.sendText(spid, util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("Socket connection timeout")) return
if (e.includes("item-not-found")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
