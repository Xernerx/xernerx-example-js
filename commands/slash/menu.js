import { SlashCommandBuilder, Discord } from 'xernerx';

export default class MenuCommand extends SlashCommandBuilder {
    constructor() {
        super('menu', {
            name: 'menu',
            description: 'Get Menu on the Framework',
            info: `Xernerx is a lightweight class based Discord.js framework. It has handlers for pretty much anything: interaction commands, message commands, context menu commands, events, custom events, error handling, i18next.`
        })
    }

    async exec(interaction) {
        let embeds = [];

        const channels = [];

        for (let i = 1; i < 10; i++) {
            channels.push({ name: `channel-${i}`, topic: `This is channel ${i}!` });
        }

        for (const channel of channels) {
            let embed = new Discord.EmbedBuilder()
                .setTitle(channel.name || "None")
                .setDescription(channel.topic || "None")

            embeds.push(embed);
        }

        interaction.util.selectMenuPaginator(embeds.slice(0, 25));
    }
}