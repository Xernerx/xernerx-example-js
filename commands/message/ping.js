import { Discord, MessageCommand } from 'xernerx';

export default class PingCommand extends MessageCommand {
    constructor() {
        super('ping', {
            name: 'ping',
            description: 'Pong!',
            separator: ' ',
            owner: true,
            channelType: Discord.ChannelType.GuildText,
            channels: ["1029833104438861824"],
            guilds: ["687429190165069838", "784094726432489522"],
            cooldown: 15000,
            userPermissions: [Discord.PermissionFlagsBits.ViewChannel, Discord.PermissionFlagsBits.SendMessages],
            args: [{
                type: "option",
                name: "option",
                content: ["hello", "goodbye"],
                default: "hello"
            }, {
                type: 'number',
                name: 'number',
                default: 4
            }, {
                type: 'boolean',
                name: 'boolean',
                default: true
            }, {
                type: 'user',
                name: 'user',
                default: message => message.author
            }, {
                type: 'member',
                name: 'member',
                default: message => message.member
            }, {
                type: 'channel',
                name: 'channel',
                default: message => message.channel
            }, {
                type: "rest",
                name: "rest",
                default: "No rest."
            }, {
                type: "flag",
                name: "flag",
                content: "--flag"
            }, {
                type: "flag",
                name: "ping",
                content: "--ping"
            }]
        })
    }

    async conditions(message, args) {

    }

    async exec(message, args) {
        message.util.reply({ content: `My ping: \`${this.client.ws.ping}ms.\`` });
    }
}