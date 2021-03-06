const fs = require('fs');
const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

const ZhuLiAnger = require("./commands/anger.js")

client.once('ready', () => {
    console.log('Zhu Li is on!');
});




client.on('message', message => {
	
	let English = (/([a-z]|[A-Z])+/)
	if(message.channel.name == 'korean-only' && English.test(message.content) && !message.member.user.bot){
			ZhuLiAnger.No_English(message, message.member.user);
			
	}




	//Checks for ZhuLi commands
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	if (!client.commands.has(command)) return;



	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});








//this has to be the end
client.login(token);