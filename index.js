const Discord = require('discord.js');
const { prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    console.log(message.content)
    console.log(message.client)

    if(message.content.startsWith(`${prefix}kick`)) {
        //message.channel.send("kick")

        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: Seeya " + member.displayName + "!")
        })
    }
    if (message.content === (`${prefix}ping`)) {
        message.channel.send('``Pong bitch!``');
    }
})

client.login(token);