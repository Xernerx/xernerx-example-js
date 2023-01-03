import { default as config } from './data/config/config.js';
import Xernerx, { Discord } from 'xernerx';

new class Client extends Xernerx.Client {
    constructor() {
        super({
            intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent],
        }, {
            ownerId: ["482513687417061376"],
            cooldown: {
                default: 5000,
            },
            logging: true
        }, config)

        this.modules.commandHandler.loadAllMessageCommands({
            prefix: config.prefix,
            directory: "./commands/message",
            handleDeletes: true,
            handleEdits: true,
            allowMention: true,
            logging: true,
            cooldown: 2000,
        })

        this.modules.commandHandler.loadAllSlashCommands({
            directory: "./commands/slash",
            guildId: config.guildId,
            global: false,
            defer: {
                reply: true
            },
            logging: true,
            cooldown: 2000,
        })

        this.modules.commandHandler.loadAllContextCommands({
            directory: "./commands/context",
            guildId: config.guildId,
            global: false,
            logging: true,
            cooldown: 2000,
        })

        this.modules.eventHandler.loadAllEvents({
            directory: './events',
            logging: true,
        })

        this.modules.inhibitorHandler.loadAllInhibitors({
            directory: './inhibitors',
            logging: true
        })

        this.modules.webhookHandler.post({
            token: "BotTopGGToken",
            logging: true
        })

        this.modules.webhookHandler.vote({
            token: "WebhookAuthToken",
            logging: true
        })

        this.register(config.token);
    }
}