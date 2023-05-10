import { SlashCommandBuilder, EmbedBuilder } from 'xernerx';

export default class MenuCommand extends SlashCommandBuilder {
	constructor() {
		super('menu', {
			name: 'menu',
			description: 'Get Menu on the Framework',
			info: `Xernerx is a lightweight class based Discord.js framework. It has handlers for pretty much anything: interaction commands, message commands, context menu commands, events, custom events, error handling, i18next.`,
		});
	}

	async exec(interaction) {
		// I will add this one day
	}
}
