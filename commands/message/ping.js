const { MessageCommand } = require('xernerx');

class PingCommand extends MessageCommand {
    constructor() {
        super('ping', {
            name: 'ping',
            description: 'Pong!'
        })
    }

    async exec(message) {
        message.reply('PONG!');
    }
}

module.exports = PingCommand;