const { InteractionCommand } = require('xernerx');

class CommandWithGroupsAndSubsCommand extends InteractionCommand {
    constructor() {
        super('command-with-groups-and-subs', {
            name: 'command-with-groups-and-subs',
            description: 'A plain command with groups and subs.',
            groups: [{
                name: "group-1",
                description: "This is the first group.",
                subs: [{
                    name: "subcommand-1",
                    description: "This is the first subcommand of group 1."
                }, {
                    name: "subcommand-2",
                    description: "This is the second subcommand of group 1."
                }]
            }, {
                name: "group-2",
                description: "This is the second group.",
                subs: [{
                    name: "subcommand-1",
                    description: "This is the first subcommand of group 2."
                }, {
                    name: "subcommand-2",
                    description: "This is the second subcommand of group 2."
                }]
            }]
        })
    }

    async exec(interaction, { group: group, sub: sub }) {
        switch (group) {
            case 'group-1': {
                switch (sub) {
                    case 'subcommand-1': return interaction.reply('This is subcommand 1 of group 1.')
                    case 'subcommand-2': return interaction.reply('This is subcommand 2 of group 1.')
                }
            }
            case 'group-2': {
                switch (sub) {
                    case 'subcommand-1': return interaction.reply('This is subcommand 1 of group 2.')
                    case 'subcommand-2': return interaction.reply('This is subcommand 2 of group 2.')
                }
            }
        }
    }
}

module.exports = CommandWithGroupsAndSubsCommand;