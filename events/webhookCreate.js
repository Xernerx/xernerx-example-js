import { XernerxEvent } from 'xernerx';

export default class WebhookCreateEvent extends XernerxEvent {
	constructor() {
		super('webhookCreate', {
			name: 'webhookCreate',
			emitter: 'client',
			once: false,
		});
	}

	async run(client, stats, response, host) {
		console.log(`Ran stats check`, stats);
	}
}
