import { default as config } from './data/config/config.js';
import { XernerxClient, Discord } from 'xernerx';

class Client extends XernerxClient {
    constructor() {
        super({
            intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent]
        }, {
            ownerId: ["482513687417061376"],
        })

        this.modules.commandHandler.loadAllMessageCommands({
            prefix: config.prefix,
            directory: "./commands/message",
            handleDeletes: true,
            handleEdits: true,
            allowMention: true,
        })

        this.modules.commandHandler.loadAllSlashCommands({
            directory: "./commands/slash",
            guildId: "784094726432489522",
            global: false
        })

        this.modules.commandHandler.loadAllSlashCommands({
            directory: "./commands/context",
            guildId: "784094726432489522",
            global: false
        })

        this.modules.eventHandler.loadAllEvents({
            directory: 'events'
        })

        this.modules.inhibitorHandler.loadAllInhibitors({
            directory: 'inhibitors'
        })
    }
}

const client = new Client();

client.login(config.token);