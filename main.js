const { Client, LanguageHandler, Discord: { GatewayIntentBits } } = require('xernerx');
const { prefix, guildId, ownerId, token } = require('./data/config/config.json');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages],
    prefix: prefix,
    ownerId: ownerId,
    guildId: guildId,
    global: false,
    ignoreOwner: true,
    defaultCooldown: 5000,
    logging: ["runType", "name", "aliases"],
    defer: {
        reply: true,
    },
    color: {
        embed: "#FF0000",
    },
    config: {
        links: { github: "https://github.com/TheDummi/example-xernerx-bot/" }
    },
    language: {
        lang: "en",
        fallbackLng: "en",
        ns: "Xernerx"
    }
})

client.modules.commandHandler.loadAllInteractionCommands('commands/interaction', true);
client.modules.commandHandler.loadAllContextMenuCommands('commands/contextMenu', true);
client.modules.commandHandler.loadAllMessageCommands('commands/message');

client.modules.eventHandler.loadAllEvents('events');

client.modules.languageHandler.loadAllLanguages('data/languages');

client.login(token)