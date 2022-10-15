import { SlashCommand, Discord } from 'xernerx';

export default class PingCommand extends SlashCommand {
    constructor() {
        super('ping', {
            name: 'ping',
            description: 'Pong!',
            defer: {
                reply: false
            }
        })
    }

    async conditions(interaction, args) {

    }

    async exec(interaction) {
        let embed = new Discord.EmbedBuilder()
            .setTitle(this.data.name)
            .setDescription(this.data.description)
            .setURL(`https://github.com/TheDummi/blob/main/commands/interaction/${this.data.name}.js`)
            .setColor("Red")
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) })
            .addFields({ name: this.data.name, value: `${this.client.ws.ping}ms.` })
        await interaction.util.defer(1000)
        await interaction.util.reply({ embeds: [embed] })
    }
}
