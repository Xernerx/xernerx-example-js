/** @format */

import { Events, XernerxEventBuilder } from 'xernerx';

export default class ReadyEvent extends XernerxEventBuilder {
	constructor() {
		super('ready', {
			name: 'ready',
			description: 'Emitted when the client is ready.',
			type: 'discord',
			emitter: 'client',
			once: false,
			watch: Events.ClientReady,
		});
	}

	override async run(client: any) {
		// console.log(client.user);
		console.log('My Custom Message');
	}
}
