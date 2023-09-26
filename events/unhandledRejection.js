import { XernerxEvent } from 'xernerx';

export default class UnhandledRejectionEvent extends XernerxEvent {
	constructor() {
		super('unhandledRejection', {
			name: 'unhandledRejection',
			emitter: 'process',
			once: false,
		});
	}

	async run(error) {
		console.log(error);
	}
}
