const { InteractionCommand, Discord: { EmbedBuilder } } = require('xernerx');

class ButtonCommand extends InteractionCommand {
    constructor() {
        super('button', {
            name: 'button',
            description: 'Get button on the Framework',
            info: `Xernerx is a lightweight class based Discord.js framework. It has handlers for pretty much anything: interaction commands, message commands, context button commands, events, custom events, error handling, i18next.`
        })
    }

    async exec(interaction) {
        let embeds = [];

        for (const channel of (await interaction.guild.channels.fetch()).values()) {
            let embed = new EmbedBuilder()
                .setTitle(channel.name || "None")
                .setDescription(channel.topic || "None")

            embeds.push(embed);
        }

        interaction.util.buttonPaginator(embeds.slice(0, 25));
    }
}

module.exports = ButtonCommand;