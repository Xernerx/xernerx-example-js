import { EmbedBuilder, SlashCommandBuilder } from 'xernerx';

export default class PingCommand extends SlashCommandBuilder {
	constructor() {
		super('ping', {
			name: 'ping',
			description: 'Pong!',
			defer: {
				reply: false,
			},
		});
	}

	async exec(interaction) {
		let embed = new EmbedBuilder()
			.setTitle(this.data.name)
			.setDescription(this.data.description)
			.setURL(`https://github.com/TheDummi/blob/main/commands/interaction/${this.data.name}.js`)
			.setColor('Red')
			.setTimestamp()
			.setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) })
			.addFields({ name: this.data.name, value: `${this.client.ws.ping}ms.` });

		await interaction.util.delay(1000);

		return await interaction.util.reply({ embeds: [embed] });
	}
}
