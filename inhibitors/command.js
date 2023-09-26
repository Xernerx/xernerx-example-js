import { XernerxInhibitor } from 'xernerx';

export default class CommandInhibitor extends XernerxInhibitor {
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
