let {token} = require('./config.json')
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once('ready', () => {
    console.log('Bot online')
})

client.on('messageCreate', message => {
    if (message.content !== '.get') return
    
    function randomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    return result;
    }
    
    let finalStr = ''
    let n = 0
    while (n <= 70) {
        finalStr += `https://discord.gg/${randomString(8)}\n`
    }
    message.channel.send(finalStr)
})



client.login(token)
