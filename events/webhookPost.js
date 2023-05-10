import { EventBuilder } from 'xernerx';

export default class WebhookPostEvent extends EventBuilder {
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
