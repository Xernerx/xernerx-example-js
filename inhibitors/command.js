import { InhibitorBuilder } from 'xernerx';

export default class CommandInhibitor extends InhibitorBuilder {
	constructor() {
		super('command', {
			name: 'command',
			type: 'command',
		});
	}

	check(action, command) {
		// console.log(command);
	}
}
