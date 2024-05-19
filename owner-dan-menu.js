const fs = require("fs");

global.namabot = "©Rina"
global.namaowner = "Sphynix"
global.footer_text = "© Rina-Tennoji " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285817287205','6287882513435']
global.pairingNumber = ""
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `[ DONATE UNTUK BOT ]

Qris : Scan barcode di atas

Dana : 085817287205
An : Rahmad

Shopeepay : 089524882317
An : sphynixstore

[ Terima kasih sudah support ]
`

module.exports.helpMenu = (pushname) =>{
  return `
╔┈┈┈┈「 *INFO USER* 」┈┈┈┈✧
╎╭─────────────────✧
╎│Halo kak
╎│𖣘• 𝗡𝗮𝗺𝗲 : ${pushname}
╎│Silahkan gunakan bot ini
╎╰─────────────────✧
╠┈┈┈┈「 *BOT INFO* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : Sphynix
╎│𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ©Rina-Helper
╎╰─────────────────✧
╠┈┈┈┈「 *RULES BOT* 」┈┈┈┈✧
╎╭─────────────────✧
╎│𖣘• DILARANG TELP BOT
╎│ 
╎│𖣘• JIKA HANYA DIBACA 
╎│    OLEH BOT COBA
╎│    UNTUK KETIK
╎│    KEMBALI
╎╰─────────────────✧
╠┈┈┈「 *JAJAN DISINI* 」┈┈┈✧
╎╭─────────────────✧
╎│𖣘• Jajan app premium
╎│   
╎│𖣘• Klik link dibawah ini
╎│  
╎│𖣘• wa.me/6285817287205
╎│
╎│𖣘• Cek Profilenya
╎│
╎│𖣘• Lalu chat admin
╎│    sphynixstore aja ya
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
» ketik : .owner » dengan (.)
» ketik :  owner » tanpa  (.)
`
}
