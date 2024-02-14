

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
  
    .setName('Code') // add your name
    .setDetails('Idling') // set your status
    .setState(null)
  
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1116694463658598412/1203880471084138506/idle-vscode.png?ex=65dbee8f&is=65c9798f&hm=e5a4c84b14058b8283f050b36ae419f41c1171341b6409b7115e6bba3bb02e79&=&format=webp&quality=lossless&width=473&height=473') // add image link (form: .png, .gif).
    .setAssetsLargeText('Idling') // set image name (type any name)
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1116694463658598412/1203880477870653440/idle.png?ex=65dbee90&is=65c97990&hm=21dee6be5f9850a571e87da31f963c29aadd97efb01d7311c4b19c63822f5d4f&=&format=webp&quality=lossless&width=473&height=473') 
    .setAssetsSmallText('zZz')
     client.user.setActivity(r);
     client.user.setPresence({ status: "idle" }); // set your status (online,dnd, idle)
})

client.login(process.env.TOKEN)

