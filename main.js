const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Zhu Li is on!');
});


//client.on is waiting for the client to be on
//How does a bot stay on?
//TODO: Figure out how to run functions outside of main. Do we just reference them?
client.on('message', message => {

    //TODO: We are currently on ES5, figure out how to switch to ES6
    if(message.content === prefix + 'ping')
    {
        console.log(message.content);
        message.channel.send('STFU');
    }

    

});








//this has to be the end
client.login(token);