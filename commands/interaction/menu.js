const { InteractionCommand, Discord: { EmbedBuilder }, selectMenuPaginator } = require('xernerx');

class MenuCommand extends InteractionCommand {
    constructor() {
        super('menu', {
            name: 'menu',
            description: 'Get Menu on the Framework',
            info: `Xernerx is a lightweight class based Discord.js framework. It has handlers for pretty much anything: interaction commands, message commands, context menu commands, events, custom events, error handling, i18next.`
        })
    }

    async exec(interaction) {
        let embeds = [];

        for (const channel of (await interaction.guild.channels.fetch())) {
            let embed = new EmbedBuilder()
                .setTitle(channel.name || "None")
                .setDescription(channel.topic || "None")

            embeds.push(embed);
        }

        selectMenuPaginator(interaction, embeds);
    }
}

module.exports = MenuCommand;