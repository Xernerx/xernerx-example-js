const { MessageCommand, Discord, reply } = require('xernerx');

class LoadCommand extends MessageCommand {
    constructor() {
        super('load', {
            name: 'load',
            description: 'Pong!',
            aliases: ["reload"],
            args: [{
                type: "option",
                name: "option",
                content: ["all", "interaction", "context", "message"]
            }]
        })
    }

    async exec(message, args) {
        let commands;

        switch (args.option) {
            case 'interaction': {
                commands = this.client.modules.loader.reloadAllInteractionCommands()
                break;
            }
            case 'context': {
                commands = this.client.modules.loader.reloadAllContextMenuCommands()
                break;
            }
            case 'message': {
                commands = this.client.modules.loader.reloadAllMessageCommands()
                break;
            }
        }

        message.util.reply(`Reloaded ${commands.map(command => command.name).join(', ')}`)
    }
}

module.exports = LoadCommand;