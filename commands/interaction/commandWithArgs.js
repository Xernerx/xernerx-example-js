const { InteractionCommand } = require('xernerx');

class CommandWithArgsCommand extends InteractionCommand {
    constructor() {
        super('command-with-args', {
            name: 'command-with-args',
            description: 'A plain command with just args.',
            args: [{
                type: "string",
                options: {
                    name: 'string',
                    description: 'This is a string option.',
                    choices: [{
                        name: "choice-1",
                        value: "Choice 1"
                    }, {
                        name: "choice-2",
                        value: "Choice 2"
                    }, {
                        name: "choice-3",
                        value: "Choice 3"
                    }]
                }
            }, {
                type: "boolean",
                options: {
                    name: 'boolean',
                    description: "This is a boolean option."
                }
            }, {
                type: "user",
                options: {
                    name: "user",
                    description: "This is a user option."
                }
            }, {
                type: "channel",
                options: {
                    name: "channel",
                    description: "This is a channel option."
                }
            }, {
                type: "number",
                options: {
                    name: "number",
                    description: "This is a number option."
                }
            }
                , {
                type: "integer",
                options: {
                    name: "integer",
                    description: "This as an integer option."
                }
            }, {
                type: "role",
                options: {
                    name: "role",
                    description: "This is a role option."
                }
            }, {
                type: "mentionable",
                options: {
                    name: "mentionable",
                    description: "This is a mentionable option."
                }
            }]
        })
    }

    async exec(interaction, { options: options }) {
        let text = (options.string ? `You chose \`${options.string}\` for string\n` : "") + (options.boolean ? `You chose ${options.boolean} for boolean\n` : "") + (options.user ? `You chose ${options.user} for user\n` : "") + (options.channel ? `You chose ${options.channel} for channel\n` : "") + (options.number ? `You chose ${options.number} for number\n` : "") + (options.integer ? `You chose ${options.integer} for integer\n` : "") + (options.role ? `You chose ${options.role} for role\n` : "") + (options.mentionable ? `You chose ${options.mentionable} for mentionable\n` : "");
        interaction.reply({
            content:
                text.length ? text : "You didn't specify any options."
        });
    }
}

module.exports = CommandWithArgsCommand;