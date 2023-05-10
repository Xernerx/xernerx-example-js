import { ContextCommandBuilder } from 'xernerx';

export default class ServerCommand extends ContextCommandBuilder {
	constructor() {
		super('server', {
			name: 'Server Info',
			type: 'message',
		});
	}

	async exec(interaction) {
		// One day I add this back :)
	}
}
