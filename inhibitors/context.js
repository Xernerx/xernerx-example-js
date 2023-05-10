import { InhibitorBuilder } from 'xernerx';

export default class ContextInhibitor extends InhibitorBuilder {
	constructor() {
		super('context', {
			name: 'context',
			type: 'contextCommand',
		});
	}

	check(action, command) {
		// console.log(command);
	}
}
