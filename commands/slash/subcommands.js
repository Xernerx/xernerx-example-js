import { SlashCommandBuilder } from 'xernerx';

export default class SubcommandCommand extends SlashCommandBuilder {
	constructor() {
		super('subcommands', {
			name: 'subcommands',
			description: 'A command with subcommands.',
			subcommands: [
				{
					name: 'name',
					description: "Get the command's name.",
				},
				{
					name: 'description',
					description: "Get the command's description.",
				},
				{
					name: 'subs',
					description: "Get the command's subcommands.",
					args: [
						{
							type: 'string',
							name: 'string',
							description: 'hi',
						},
					],
				},
			],
		});
	}

	async exec(interaction, { sub: subcommand }) {
		let embed = new EmbedBuilder()
			.setTitle(this.data.name)
			.setDescription(this.data[subcommand] || this.data.options[2].name)
			.setURL(`${this.client.config.links.github}/blob/main/commands/interaction/${this.data.name}.js`)
			.setColor(this.client.color.embed)
			.setTimestamp()
			.setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) });

		return await interaction.util.reply({ embeds: [embed] });
	}
}
