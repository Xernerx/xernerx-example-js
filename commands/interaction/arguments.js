const { InteractionCommand, Discord: { MessageEmbed } } = require('xernerx');

class argumentsCommand extends InteractionCommand {
    constructor() {
        super('arguments', {
            name: 'arguments',
            description: 'A plain command with just args.',
            args: [{
                type: "string",
                options: {
                    name: 'string',
                    description: 'This is a string option.',
                    choices: [{
                        name: "Choice 1",
                        value: "Choice 1"
                    }, {
                        name: "Choice 2",
                        value: "Choice 2"
                    }, {
                        name: "Choice 3",
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

    exec(interaction, { options: options }) {
        let embed = new MessageEmbed()
            .setTitle(this.data.name)
            .setDescription(this.data.description)
            .setURL(`${this.client.config.links.github}/blob/main/commands/interaction/${this.data.name}.js`)
            .setColor(this.client.color.embed)
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) });

        for (const option of this.data.options) {
            let description = "";
            if (options[option.name]) description = `> You have given: ${options[option.name]} as option value.`
            embed.addField(`${option.name} option`, `${description}\n> ${option.description}`)
        }

        interaction.reply({ embeds: [embed] })
    }
}

module.exports = argumentsCommand;