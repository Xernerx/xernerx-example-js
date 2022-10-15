import { default as config } from './data/config/config.js';
import { XernerxClient, Discord } from 'xernerx';

class Client extends XernerxClient {
    constructor() {
        super({
            intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent]
        }, {
            ownerId: ["482513687417061376"],
            logging: true
        })

        this.modules.commandHandler.loadAllMessageCommands({
            prefix: config.prefix,
            directory: "./commands/message",
            handleDeletes: true,
            handleEdits: true,
            allowMention: true,
            logging: true
        })

        this.modules.commandHandler.loadAllSlashCommands({
            directory: "./commands/slash",
            guildId: config.guildId,
            global: false,
            defer: {
                reply: true
            },
            logging: true
        })

        this.modules.commandHandler.loadAllContextCommands({
            directory: "./commands/context",
            guildId: config.guildId,
            global: false,
            logging: true
        })

        this.modules.eventHandler.loadAllEvents({
            directory: './events',
            logging: true
        })

        this.modules.inhibitorHandler.loadAllInhibitors({
            directory: './inhibitors',
            logging: true
        })
    }
}

const client = new Client();

client.login(config.token);