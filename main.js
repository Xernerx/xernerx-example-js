import Xernerx, { Discord } from 'xernerx';
import { XernerxCommands } from 'xernerx-commands';
import { XernerxLanguage } from 'xernerx-language';
import { XernerxPoster } from 'xernerx-poster';

import config from './data/config/config.js';

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
            handleTyping: true,
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

        this.register(config.token);

        this.loadExtensions({
            extensions: [
                new XernerxCommands(this, {
                    prefix: 'xc',
                    exclude: ["ping"]
                }),
                new XernerxLanguage(this),
                new XernerxPoster(this)
            ],
            logging: true
        });
    }
}