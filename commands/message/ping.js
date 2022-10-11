import { MessageCommand } from 'xernerx';

export default class PingCommand extends MessageCommand {
    constructor() {
        super('ping', {
            name: 'ping',
            description: 'Pong!',
            separator: ' ',
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
        // if (message.author != this.client.settings.ownerId[0]) return message.util.reply(`You're not ${(await this.client.users.fetch(this.client.settings.ownerId[0]))}`);
    }

    async exec(message, args) {
        message.util.reply({ content: "hi" })
        console.log(args)
    }
}