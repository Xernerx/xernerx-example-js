const { Client, EventHandler, CommandHandler, LanguageHandler, Discord } = require('xernerx');
const { prefix, guildId, ownerId, token } = require('./data/config/config.json');

const client = new Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_VOICE_STATES],
    prefix: prefix,
    ownerId: ownerId,
    guildId: guildId,
    global: false,
    ignoreOwner: false,
    defaultCooldown: 2000,
    logging: true,
    color: {
        embed: "#FF0000",
    },
    config: {
        example: 'Here you can store any data you want that doesn\'t get included with the bot.',
        notes: {
            note1: "Don't store info like bot tokens or api tokens here",
            note2: "you can store any kind of data here, with as many objects as you want."
        },
        array: ["or", "even", "an", "array", ":)"],
        links: {
            github: "https://github.com/TheDummi/example-xernerx-bot"
        }
    }
})

const commandHandler = new CommandHandler({ client: client });

const eventHandler = new EventHandler({ client: client });

const languageHandler = new LanguageHandler({ client: client, lang: 'en', fallbackLang: 'en', ns: 'Xernerx Framework' })

commandHandler.loadInteractionCommands('commands/interaction', true);
commandHandler.loadContextMenuCommands('commands/contextMenu', true);
commandHandler.loadMessageCommands('commands/message', true);


eventHandler.loadEvents('events', true);

languageHandler.loadLanguages({ path: 'data/languages', logging: true });

client.login(token)