const { Client, LanguageHandler, Discord: { GatewayIntentBits } } = require('xernerx');
const { prefix, guildId, ownerId, token } = require('./data/config/config.json');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages],
    prefix: prefix,
    ownerId: ownerId,
    guildId: guildId,
    global: false,
    ignoreOwner: false,
    defaultCooldown: 5000,
    logging: true,
    color: {
        embed: "#FF0000",
    },
    config: {
        links: { github: "https://github.com/TheDummi/example-xernerx-bot/" }
    }
})

const languageHandler = new LanguageHandler({ client: client, lang: 'en', fallbackLang: 'en', ns: 'Xernerx Framework' })

client.modules.commandHandler.loadAllInteractionCommands('commands/interaction', true)
client.modules.commandHandler.loadAllContextMenuCommands('commands/contextMenu', true)
client.modules.commandHandler.loadAllMessageCommands('commands/message', true);

client.modules.eventHandler.loadEvents('events', true);

languageHandler.loadLanguages({ path: 'data/languages', logging: true });

client.login(token)