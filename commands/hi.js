module.exports = {
	name: "hi",
	description: 'Will say hi back if you say hi',
	execute(message, args) {
		message.channel.send("This is for testing");
		message.channel.send("Well that wasn't very nice.");
	},
};