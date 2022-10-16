import { default as config } from './data/config/config.js';
import Xernerx, { Discord } from 'xernerx';

class Client extends Xernerx.Client {
    constructor() {
        super({
            intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent]
        }, {
            ownerId: ["482513687417061376"],
            cooldown: {
                default: 5000,
            },
            logging: true
        })

        this.modules.commandHandler.loadAllMessageCommands({
            prefix: config.prefix,
            directory: "./commands/message",
            handleDeletes: true,
            handleEdits: true,
            allowMention: true,
            logging: true,
            cooldown: 10000,
        })

        this.modules.commandHandler.loadAllSlashCommands({
            directory: "./commands/slash",
            guildId: config.guildId,
            global: false,
            defer: {
                reply: true
            },
            logging: true,
            cooldown: 10000,
        })

        this.modules.commandHandler.loadAllContextCommands({
            directory: "./commands/context",
            guildId: config.guildId,
            global: false,
            logging: true,
            cooldown: 10000,
        })

        this.modules.eventHandler.loadAllEvents({
            directory: './events',
            logging: true,
        })

        this.modules.inhibitorHandler.loadAllInhibitors({
            directory: './inhibitors',
            logging: true
        })
    }
}

const client = new Client();

client.login(config.token);