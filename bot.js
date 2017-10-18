const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('lol');
  	}
});

client.on('ready', () => {
  // Get the channel via ID
  let channel = client.channels.get('369859313314824203');
  // Or via name (less persistent)
  channel = client.channels.find('name', 'admim');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
