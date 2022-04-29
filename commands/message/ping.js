const { MessageCommand } = require('xernerx');

class PingCommand extends MessageCommand {
    constructor() {
        super('ping', {
            name: 'ping',
            description: 'Pong!',
            seperator: ' ',
            args: [{
                type: "string",
                name: "greeting",
                content: ["hello", "goodbye"]
            }, {
                type: "string",
                name: "rest",
                content: 'rest'
            }]
        })
    }

    async exec(message, args) {
        console.log(args)
        let text = 'PONG!';
        if (args.greeting == 'goodbye') text = `Goodbye ${message.author}!`;
        if (args.greeting == 'hello') text = `Hello ${message.author}!`;
        if (args.rest) text += `This was your remaining arguments in your message \`${args.rest}\`.`;


        message.reply({ content: text })
    }
}

module.exports = PingCommand;