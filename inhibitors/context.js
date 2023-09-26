import { XernerxInhibitor } from 'xernerx';

export default class ContextInhibitor extends XernerxInhibitor {
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
