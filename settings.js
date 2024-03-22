const fs = require('fs')
const chalk = require('chalk')
global.ownernomer = "918416093656"
global.ownername = "Anonymous"
global.ytname = "HBMods OFc"
global.socialm = "GitHub: HBMods-OFC"
global.location = "India, Mizoram, Aizawl"
global.ownernumber = '918416093655'
global.ownername = 'Zakima'
global.botname = 'Zakima' 
global.packname = 'Sticker By'
global.author = 'Zakima\nLunghlu Dawr'
global.themeemoji = '🪀'
global.wm = "©Zakima Lunghlu Dawr"
global.prefa = ['','!','.','#','&']
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.autoread_status = false //auto view status/story

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
