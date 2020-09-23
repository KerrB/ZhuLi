const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Zhu Li is on!');
});


//client.on is waiting for the client to be on
//How does a bot stay on?
//TODO: Figure out how to run functions outside of main. Do we just reference them?
client.on('message', message => {

    if(message.content == '!ping')
    {
        message.channel.send('STFU');
    }

});





//this has to be the end
client.login('NzU4MTM4MjM2MTc3NzQzODgz.X2qlQQ.ZvgMes9fEKdqwlWNr14QypXUl6c')