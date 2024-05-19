const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("./lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

global.namabot = "Rina-Helper"
global.namaowner = "Rinazxi"
global.footer_text = "© Rina-Tennoji " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285817287205','6285778324998']
global.pairingNumber = ""
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `[ PAYMENT SPHYNIXSTORE ]

Qris : Scan barcode di atas

Dana : 085817287205
An : Rahmad

Shopeepay : 089524882317
An : sphynixstore

[ Silahkan melakukan pembayaran ]
`

module.exports.helpMenu = (ucapanWaktu, pushname, ownerName, botName, jam, tanggal, runtime) =>{
  return `
╔┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
╎╭─────────────────✧
╎│Hai  ${pushname !== undefined ? pushname : 'Kak'}
╎│Selamat ${ucapanWaktu}  
╠┈┈┈┈「 *BOT INFO* 」┈┈┈┈┈✧
╎│𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
╎│𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
╎│𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
╎│𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
╎│𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
╎╰─────────────────✧
╠┈┈「 *RULES* 」┈┈✧
╎╭─────────────────✧
╎│•❐ *DILARANG
╎│    TELP BOT
╎│ 
╎│•❐ *JIKA HANYA DIBACA 
╎│     OLEH BOT 
╎│     COBA UNTUK KETIK
╎│     KETIK KEMBALI*
╎╰─────────────────✧
╠┈┈「 *JAJAN DISINI* 」┈┈✧
╎╭─────────────────✧
╎│•❐ Jajan app premium
╎│   
╎│•❐ Klik nomor dibawah
╎│   ini 
╎│   
╎│•❐ +6285817287205
╎│
╎│•❐ Cek Profilenya ya
╎│     
╎╰─────────────────✧
╠┈┈┈┈「 *FITUR BOT* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│\`\`\`
╎│•❐ owner
╎│•❐ addsewa
╎│•❐ delsewa
╎│•❐ ceksewa
╎│•❐ listsewa
╎│•❐ pay
╎│•❐ setpay
╎│•❐ list
╎│•❐ addlist
╎│•❐ updatelist
╎│•❐ renamelist
╎│•❐ dellist
╎│•❐ jeda
╎│•❐ tambah
╎│•❐ kurang
╎│•❐ kali
╎│•❐ bagi
╎│•❐ setproses
╎│•❐ changeproses
╎│•❐ delsetproses
╎│•❐ setdone
╎│•❐ changedone
╎│•❐ delsetdone
╎│•❐ proses
╎│•❐ done
╎│•❐ welcome
╎│•❐ goodbye
╎│•❐ setwelcome
╎│•❐ changewelcome
╎│•❐ delsetwelcome
╎│•❐ setleft
╎│•❐ changeleft
╎│•❐ delsetleft
╎│•❐ antiwame
╎│•❐ antiwame2
╎│•❐ antilink
╎│•❐ antilink2
╎│•❐ open
╎│•❐ close
╎│•❐ hidetag
╎│•❐ add
╎│•❐ kick
╎│•❐ stiker
╎│•❐ ffid
╎│•❐ mlid
╎│•❐ setppgc
╎│•❐ setnamegc
╎│•❐ setdesgc
╎│•❐ linkgc
╎│•❐ resetlinkgc
╎│•❐ promote
╎│•❐ demote
╎│•❐ setbot
╎│•❐ updatesetbot
╎│•❐ delsetbot
╎│•❐ bot
╎│\`\`\`
╎╰─────────────────✧
╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan).
Sebagai contoh :
•❐ ketik (.owner ) dengan (.)
•❐ ketik ( owner ) tanpa  (.)
`
}
