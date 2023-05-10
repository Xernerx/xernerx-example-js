import { MessageCommandBuilder } from 'xernerx';

export default class LoadCommand extends MessageCommandBuilder {
	constructor() {
		super('load', {
			name: 'load',
			description: 'Load/reload/unload modules.',
			aliases: ['reload'],
		});
	}

	async exec(message) {
		// One day I'll add this one :)
	}
}
