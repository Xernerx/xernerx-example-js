const { Client, EventHandler } = require('xernerx');
const { CommandHandler } = require('../xernerx/main');
// const { Intents } = require('discord.js');
const { prefix, guildId, ownerId, token } = require('./data/config/config.json');

const client = new Client({
    intents: [513],
    prefix: prefix,
    ownerId: ownerId,
    guildId: guildId,
    global: false,
    color: {
        embed: "#FF00FF",
        true: "#00FF00",
        false: "#FF0000"
    },
    config: {
        example: 'Here you can store any data you want that doesn\'t get included with the bot.',
        notes: {
            note1: "Don't store info like bot tokens or api tokens here",
            note2: "you can store any kind of data here, with as many objects as you want."
        },
        array: ["or", "even", "an", "array", ":)"]
    }
})

const commands = new CommandHandler({ client: client });

const events = new EventHandler({ client: client });

commands.loadInteractionCommands('./src/commands/interaction');
commands.loadMessageCommands('./src/commands/message');

events.loadEvents('./src/events')

client.login(token)