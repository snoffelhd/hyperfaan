const Discord = require('discord.js');

const client = new Discord.Client();

// Joins the voice channel as soon as the client starts up
client.on('ready', () => {
  // Get the channel via ID
  let channel = client.channels.get('368449033003597834');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
});

client.on('message', message => {
  //...
});

client.login('BOT_TOKEN');
