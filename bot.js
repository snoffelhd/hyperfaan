const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('weiss ich doch nicht. lol.');
  	}
});

client.voiceChannel.join().then(connection => console.log('Connected!'))

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
