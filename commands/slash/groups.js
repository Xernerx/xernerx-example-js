import { XernerxSlashCommand, EmbedBuilder } from 'xernerx';

export default class GroupsCommand extends XernerxSlashCommand {
	constructor() {
		super('groups', {
			name: 'groups',
			description: 'A command with subcommands.',
			groups: [
				{
					name: 'group',
					description: 'group',
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
						},
					],
				},
			],
		});
	}

	async exec(interaction, { sub: subcommand }) {
		let embed = new EmbedBuilder()
			.setTitle(this.data.name)
			.setDescription(String(this.data[subcommand] || this.data.options[2]?.name))
			.setURL(`${this.client.config.links.github}/blob/main/commands/interaction/${this.data.name}.js`)
			.setColor(this.client.color.embed)
			.setTimestamp()
			.setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) });

		return await interaction.util.reply({ embeds: [embed] });
	}
}
