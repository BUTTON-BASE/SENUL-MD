const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `*👋 Hello ${pushname}*
 - 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 🤍

👨‍💻 *Welcome to SENUL-MD* 👨‍💻 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ яυηтιмє * 4 hours, 5 minutes, 13 seconds
│◈ σωηєя ηαмє 
𝗡𝗜𝗥𝗢
│◈ σωηєя ηυмвєяѕ 94762296665,94757286833
╰──────────●●►
╭──────────●●►
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
 .ig
.apk
.apkdl
.twitter
.gdrive
.mediafire
.fb
.song
.video
.tt

╰───────────●●►
╭──────────●●►
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
 .menu
.about
.alive
.ping
.system
.runtime

╰───────────●●►
╭──────────●●►
 🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
 .animegirl
.dog
.fact
.hack
.joke
.quote
.rvideo

╰───────────●●►
╭──────────●●►
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
 .convert

╰───────────●●►
╭──────────●●►
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
 .yts

╰───────────●●►
╭──────────●●►
 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
 .promote
.demote
.remove
.add
.setgoodbye
.setwelcome
.getpic

╰───────────●●►
╭──────────●●►
 🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 .shutdown
.broadcast
.setpp
.block
.unblock
.clearchats
.jid
.gjid
.restart

╰───────────●●►
╭──────────●●►
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 .ai
.define
.githubstalk
.gpass
.movie
.news
.srepo
.trt
.weather

╰───────────●●►
╭──────────●●►
 💃 *𝐕𝐨𝐢𝐜𝐞 𝐌𝐞𝐧𝐮*
  ───────
 Ane
 Hurathal wenna epa
 hi
 mk
 gn
 gm
 pissuda

╰───────────●●►
╰───────────●●►

*©ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇɴᴜʟ-ᴍᴅ*👨‍💻`
await conn.sendMessage(from,{image:{url: `https://imgtr.ee/images/2024/09/11/3e6c73da5849ff8b9e48781ab8acbfe4.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
