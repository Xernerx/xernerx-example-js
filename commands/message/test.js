const { MessageCommand, Discord } = require('xernerx');
const { inspect } = require("util");

class TestCommand extends MessageCommand {
    constructor() {
        super('test', {
            name: 'test',
            description: 'Pong!',
            args: [{
                name: 'test',
                type: 'role'
            }]
        })
    }

    async exec(message, args) {
        console.log(args.test)
        let m = await message.util.send('this is the text command')
    }
}

module.exports = TestCommand;