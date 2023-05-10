import { EventBuilder } from 'xernerx';

export default class WebhookErrorEvent extends EventBuilder {
	constructor() {
		super('webhookError', {
			name: 'webhookError',
			emitter: 'client',
			once: false,
		});
	}

	async run(client, error, response, host) {
		console.log(error, response, host);
	}
}
