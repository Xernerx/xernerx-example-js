/** @format */

import { XernerxMessageCommand } from 'xernerx';

export default class LoadCommand extends XernerxMessageCommand {
	constructor() {
		super('load', {
			name: 'load',
			description: 'Load/reload/unload modules.',
			aliases: ['reload'],
			ignore: {
				owner: true,
			},
		});
	}

	async exec(message) {
		this.client.modules.commandHandler.reloadMessageCommands();

		this.util.reply({ content: 'reloaded!' });
	}
}
