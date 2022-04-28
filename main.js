const { Client, EventHandler } = require('xernerx');
const { CommandHandler } = require('../xernerx/main');
// const { Intents } = require('discord.js');
const { prefix, guildId, ownerId, token } = require('./data/config/config.json');

const client = new Client({
    intents: [513],
    prefix: prefix,
    ownerId: ownerId,
    guildId: guildId,
    global: false
})

const commands = new CommandHandler({ client: client });

const events = new EventHandler({ client: client });

commands.loadInteractionCommands('./src/commands/interaction');
commands.loadMessageCommands('./src/commands/message');

events.loadEvents('./src/events')

client.login(token)