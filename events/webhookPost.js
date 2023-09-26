import { XernerxEvent } from 'xernerx';

export default class WebhookPostEvent extends XernerxEvent {
	constructor() {
		super('webhookPost', {
			name: 'webhookPost',
			emitter: 'client',
			once: false,
		});
	}

	async run(client, stats, response, host) {
		console.log(`Posted stats to ${host}!`, stats);
	}
}
