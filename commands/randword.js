module.exports = {
	name: "randWord",
	description: 'Will generate random words.',
	execute(message, args) {
        let randomWords = require('random-words');
        let words = randomWords(5);
        for(i = 0; i < 3; i++)
        {
            message.channel.send("~w " + words[i]);
        }
		
	},
};