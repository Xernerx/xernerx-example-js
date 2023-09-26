import { EmbedBuilder, XernerxSlashCommand } from 'xernerx';

export default class ButtonCommand extends XernerxSlashCommand {
	constructor() {
		super('button', {
			name: 'button',
			description: 'Get button on the Framework',
		});
	}

	async exec(interaction) {
		// I will add this one day.
	}
}
