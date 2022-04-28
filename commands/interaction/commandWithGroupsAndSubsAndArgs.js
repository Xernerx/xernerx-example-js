const { InteractionCommand } = require('xernerx');

class CommandWithGroupsAndSubsAndArgsCommand extends InteractionCommand {
    constructor() {
        super('command-with-groups-subs-args', {
            name: 'command-with-groups-subs-args',
            description: 'A plain command with groups, subs and args.',
            groups: [{
                name: "group-1",
                description: "This is the first group.",
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
            }, {
                name: "group-2",
                description: "This is the second group.",
                subs: [{
                    name: "subcommand-1",
                    description: "This is the first subcommand of group 21.",
                    args: [{
                        type: 'boolean',
                        options: {
                            name: 'boolean',
                            description: "This is a boolean option."
                        }
                    }]
                }, {
                    name: "subcommand-2",
                    description: "This is the second subcommand of group 21.",
                    args: [{
                        type: 'boolean',
                        options: {
                            name: 'boolean',
                            description: "This is a boolean option."
                        }
                    }]
                }]
            }]
        })
    }

    async exec(interaction, { group: group, sub: sub, option: option }) {
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

module.exports = CommandWithGroupsAndSubsAndArgsCommand;