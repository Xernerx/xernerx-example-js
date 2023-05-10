import { SlashCommandBuilder } from 'xernerx';

export default class CommandCommand extends SlashCommandBuilder {
	constructor() {
		super('command', {
			name: 'command',
			description: 'A plain command without any args, subs or groups.',
			defer: {
				reply: true,
			},
		});
	}

	async exec(interaction) {
		let embed = new EmbedBuilder()
			.setTitle(this.data.name)
			.setDescription(this.data.description)
			.setURL(`${this.client.config.links.github}/blob/main/commands/interaction/${this.data.name}.js`)
			.setColor(this.client.color.embed)
			.setTimestamp()
			.setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) });

		return await interaction.util.reply({ embeds: [embed] });
	}
}
