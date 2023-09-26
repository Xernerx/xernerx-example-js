/** @format */

import { EmbedBuilder, XernerxSlashCommand } from 'xernerx';

export default class TestCommand extends XernerxSlashCommand {
	constructor() {
		super('test', {
			name: 'test',
			description: 'Pong!',
			defer: {
				reply: false,
			},
			args: [
				{
					type: 'string',
					name: 'auto',
					description: 'autocomplete testing!',
					autocomplete: true,
					required: true,
				},
			],
		});
	}

	async autocomplete(interaction, focused, options) {
		const items = this.client.guilds.cache.map((g) => g.name);
		return await interaction.respond(items.filter((item) => item.startsWith(focused.value)).map((item) => ({ name: item, value: item })));
	}

	async conditions(interaction) {}

	async exec(interaction, { args }) {
		// let embed = new EmbedBuilder()
		// 	.setTitle(this.data.name)
		// 	.setDescription(this.data.description)
		// 	.setURL(`https://github.com/TheDummi/blob/main/commands/interaction/${this.data.name}.js`)
		// 	.setColor('Red')
		// 	.setTimestamp()
		// 	.setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) })
		// 	.addFields({ name: this.data.name, value: `${this.client.ws.ping}ms.` });
		// await interaction.util.delay(1000);
		// await interaction.util.reply({ embeds: [embed] });
		console.log(this.util.parsed);
		this.util.reply({ content: 'hello world!' });
	}
}
