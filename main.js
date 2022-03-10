const { Client, Intents } = require('discord.js');
⚗️ Get Ready
global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/loader');

client.login(client.config.dsc.token);
