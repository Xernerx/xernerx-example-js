import { XernerxInhibitor } from 'xernerx';

export default class MessageInhibitor extends XernerxInhibitor {
	constructor() {
		super('message', {
			name: 'message',
			type: 'message',
		});
	}

	check(message) {
		// console.log(message);
	}
}
