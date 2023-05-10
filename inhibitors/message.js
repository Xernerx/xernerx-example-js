import { InhibitorBuilder } from 'xernerx';

export default class MessageInhibitor extends InhibitorBuilder {
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
