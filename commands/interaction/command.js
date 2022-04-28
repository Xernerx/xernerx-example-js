const { InteractionCommand } = require('xernerx');

class CommandCommand extends InteractionCommand {
    constructor() {
        super('command', {
            name: 'command',
            description: 'A plain command without any args, subs or groups.',
        })
    }

    async exec(interaction) {
        interaction.reply('This is a command without any args, subs or groups.');
    }
}

module.exports = CommandCommand;