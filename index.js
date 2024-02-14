

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1199263652847566858') // Keep this as it is
    .setType('PLAYING') // You can Set Any other like PLAYING, LISTENING, STREAMING
    .setURL('https://www.youtube.com/@Twqz7') //set any youtube or twitch link
  
    .setName('Spotify') // add your name
    .setDetails('Viewing home page') // set your status
    .setState(null)
  
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1116694463658598412/1203693383495843851/logo.png?ex=65db4052&is=65c8cb52&hm=01648adccaf547e325dca560ab31e00a382c8c3cdf4016c13c8111f7d0f5d4f0&50b36ae419f41c1171341b6409b7115e6bba3bb02e79&=&format=webp&quality=lossless&width=473&height=473') // add image link (form: .png, .gif).
    .setAssetsLargeText('') // set image name (type any name)
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1116694463658598412/1202983458318852107/reading.png?ex=65d8ab26&is=65c63626&hm=5ffd67a765b38c0dbac0db583712eb965653584fc746796d5c76b369b96411d2&71e87da31f963c29aadd97efb01d7311c4b19c63822f5d4f&=&format=webp&quality=lossless&width=473&height=473') 
    .setAssetsSmallText('Browsing...')
     client.user.setActivity(r);
     client.user.setPresence({ status: "idle" }); // set your status (online,dnd, idle)
})

client.login(process.env.TOKEN)

