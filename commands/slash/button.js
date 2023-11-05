/** @format */

import { EmbedBuilder, XernerxSlashCommand } from 'xernerx';

export default class ButtonCommand extends XernerxSlashCommand {
	constructor() {
		super('button', {
			name: 'button',
			description: 'Get button on the Framework',
		});
	}

	async exec(interaction) {
		await interaction.util.delay(4000);
		interaction.util.reply('hi');
	}
}
