const { InteractionCommand } = require('xernerx');

class CommandWithSubsCommand extends InteractionCommand {
    constructor() {
        super('command-with-subs', {
            name: 'command-with-subs',
            description: 'A plain command with subs.',
            subs: [{
                name: "subcommand-1",
                description: "This is the first subcommand of group 2."
            }, {
                name: "subcommand-2",
                description: "This is the second subcommand of group 2."
            }]
        })
    }

    async exec(interaction, { sub: sub }) {
        switch (sub) {
            case 'subcommand-1': return interaction.reply('This is subcommand 1 of group 1.')
            case 'subcommand-2': return interaction.reply('This is subcommand 2 of group 1.')
        }
    }
}

module.exports = CommandWithSubsCommand;