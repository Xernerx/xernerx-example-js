import { SlashCommand, Discord } from 'xernerx';

export default class argumentsCommand extends SlashCommand {
    constructor() {
        super('arguments', {
            name: 'arguments',
            description: 'A plain command with just args.',
            args: [{
                type: "string",
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
            }, {
                type: "boolean",
                name: 'boolean',
                description: "This is a boolean option."
            }, {
                type: "user",
                name: "user",
                description: "This is a user option."
            }, {
                type: "channel",
                name: "channel",
                description: "This is a channel option."
            }, {
                type: "number",
                name: "number",
                description: "This is a number option."
            }
                , {
                type: "integer",
                name: "integer",
                description: "This as an integer option."
            }, {
                type: "role",
                name: "role",
                description: "This is a role option."
            }, {
                type: "mentionable",
                name: "mentionable",
                description: "This is a mentionable option."
            }]
        })
    }

    exec(interaction, { args: options }) {
        options.fields = [];

        for (const option of this.data.options) {
            let description = "";
            if (options[option.name]) description = `> You have given: ${options[option.name]} as option value.`
            options.fields.push({ name: `${option.name} option`, value: `${description}\n> ${option.description}` })
        }

        let embed = new Discord.EmbedBuilder()
            .setTitle(this.data.name)
            .setDescription(this.data.description)
            // .setURL(`${this.client.config.links.git}/blob/main/commands/interaction/${this.data.name}.js`)
            .setColor("Random")
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) })
            .addFields(options.fields)

        interaction.util.reply({ embeds: [embed] });
    }
}
