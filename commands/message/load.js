const { MessageCommand, Discord, reply } = require('xernerx');

class LoadCommand extends MessageCommand {
    constructor() {
        super('load', {
            name: 'load',
            description: 'Pong!'
        })
    }

    async exec(message, args) {
        let commands = this.client.modules.commandHandler.reloadAllInteractionCommands()

        // message.reply(`Reloaded ${commands.join(', ')}.`)
    }
}

module.exports = LoadCommand;