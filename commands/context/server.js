import { XernerxContextCommand } from 'xernerx';

export default class ServerCommand extends XernerxContextCommand {
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
