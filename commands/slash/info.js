import { SlashCommand, Discord } from 'xernerx';

export default class InfoCommand extends SlashCommand {
    constructor() {
        super('info', {
            name: 'info',
            description: 'Get info on the Framework',
            info: `Xernerx is a lightweight class based Discord.js framework. It has handlers for pretty much anything: interaction commands, message commands, context menu commands, events, custom events, error handling, i18next.`
        })
    }

    async exec(interaction) {
        let embed = new EmbedBuilder()
            .setTitle(this.data.name)
            .setDescription(this.info)
            .setURL(`${this.client.config.links.github}/blob/main/commands/interaction/${this.data.name}.js`)
            .setColor(this.client.color.embed)
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) })
            .addFields({ name: this.data.name, value: `Latest version: ${version}\nDiscord.js version: ${Discord.version}` })

        interaction.util.reply({ embeds: [embed] });
    }
}
