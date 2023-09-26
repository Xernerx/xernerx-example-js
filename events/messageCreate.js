import { XernerxEvent } from 'xernerx';

export default class MessageCreateEvent extends XernerxEvent {
	constructor() {
		super('messageCreate', {
			name: 'messageCreate',
			emitter: 'client',
			once: false,
		});
	}

	async run(message) {
		// console.log(message.user, message.author);
	}
}
