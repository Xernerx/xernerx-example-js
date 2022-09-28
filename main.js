const { XernerxClient, GatewayIntentBits, i18next } = require('xernerx');
const { prefix, guildId, ownerId, token } = require('./data/config/config.json');

const client = new XernerxClient({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ]
}, {
    prefix: prefix,
    mentionPrefix: true,
    ownerId: ownerId,
    guildId: guildId,
    global: false,
    ignoreOwner: true,
    defaultCooldown: 5000,
    logging: ["runType", "name"],
    defer: { reply: true, },
    color: { embed: "#FF0000", }
}, {
    lang: "en",
    fallbackLng: "en",
    ns: "xernerx",
}, {
    links: { github: "https://github.com/TheDummi/example-xernerx-bot/" }
})

client.modules.commandHandler.loadAllInteractionCommands('commands/interaction', true);
client.modules.commandHandler.loadAllContextMenuCommands('commands/contextMenu', true);
client.modules.commandHandler.loadAllMessageCommands('commands/message');

client.modules.inhibitorHandler.loadAllInhibitors('inhibitors');

client.modules.eventHandler.loadAllEvents('events');

client.modules.languageHandler.loadAllLanguages('data/languages');

client.t = i18next.t

client.login(token);