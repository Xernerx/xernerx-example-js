const { InteractionCommand } = require('xernerx');

class CommandWithSubsAndArgsCommand extends InteractionCommand {
    constructor() {
        super('command-with-subs-and-args', {
            name: 'command-with-subs-and-args',
            description: 'A plain command with groups and subs.',
            subs: [{
                name: "subcommand-1",
                description: "This is the first subcommand of group 1.",
                args: [{
                    type: 'boolean',
                    options: {
                        name: 'boolean',
                        description: "This is a boolean option."
                    }
                }]
            }, {
                name: "subcommand-2",
                description: "This is the second subcommand of group 1.",
                args: [{
                    type: 'boolean',
                    options: {
                        name: 'boolean',
                        description: "This is a boolean option."
                    }
                }]
            }]
        })
    }

    async exec(interaction, { sub: sub, option: option }) {
        switch (sub) {
            case 'subcommand-1': return interaction.reply('This is subcommand 1 of group 1.')
            case 'subcommand-2': return interaction.reply('This is subcommand 2 of group 1.')
        }
    }
}

module.exports = CommandWithSubsAndArgsCommand;