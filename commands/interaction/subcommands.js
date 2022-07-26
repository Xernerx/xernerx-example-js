const { InteractionCommand, Discord: { MessageEmbed } } = require('xernerx');

class SubcommandCommand extends InteractionCommand {
    constructor() {
        super('subcommands', {
            name: 'subcommands',
            description: 'A command with subcommands.',
            subs: [{
                name: 'name',
                description: 'Get the command\'s name.'
            }, {
                name: 'description',
                description: 'Get the command\'s description.'
            }, {
                name: 'subs',
                description: 'Get the command\'s subcommands.'
            }]
        })
    }

    exec(interaction, { sub: subcommand }) {
        let embed = new MessageEmbed()
            .setTitle(this.data.name)
            .setDescription(this.data[subcommand] || this.data.options[2].name)
            .setURL(`${this.client.config.links.github}/blob/main/commands/interaction/${this.data.name}.js`)
            .setColor(this.client.color.embed)
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) });

        interaction.reply({ embeds: [embed] })
    }
}

module.exports = SubcommandCommand;