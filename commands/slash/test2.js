import { EmbedBuilder, SlashCommandBuilder } from 'xernerx';

export default class Test2Command extends SlashCommandBuilder {
	constructor() {
		super('test2', {
			name: 'test2',
			description: 'Pong!',
			defer: {
				reply: false,
			},
			permissions: {
				user: ['administrator', 'jgdshgkjf'],
				client: ['administrator'],
			},
		});
	}

	async conditions(interaction, args) {}

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
		await interaction.util.reply({ embeds: [embed] });
	}
}
