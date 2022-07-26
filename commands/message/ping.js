const { MessageCommand, Discord } = require('xernerx');
const { inspect } = require("util");

class PingCommand extends MessageCommand {
    constructor() {
        super('ping', {
            name: 'ping',
            description: 'Pong!',
            separator: ' ',
            args: [{
                type: "option",
                name: "option",
                content: ["hello", "goodbye"],
            }, {
                type: 'number',
                name: 'number',
            }, {
                type: 'boolean',
                name: 'boolean'
            }, {
                type: 'user',
                name: 'user'
            }, {
                type: 'member',
                name: 'member'
            }, {
                type: 'channel',
                name: 'channel'
            }, {
                type: "rest",
                name: "rest",
            }]
        })
    }

    async exec(message, args) {
        let text = { option: args?.option, number: args?.number, boolean: args?.boolean, user: args?.user, memberRoles: args?.member?._roles, channel: args?.channel?.name, rest: args?.rest }
        // message.reply({ content: "```js\n" + inspect(text).toString() + "```" })

        message.util.send('hi')
    }
}

module.exports = PingCommand;