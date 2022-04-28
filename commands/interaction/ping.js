const { InteractionCommand } = require('xernerx');

class PingCommand extends InteractionCommand {
    constructor() {
        super('ping', {
            name: 'ping',
            description: 'Pong!',
        })
    }

    async exec(interaction) {
        interaction.reply('PONG!');
    }
}

module.exports = PingCommand;