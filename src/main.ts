/** @format */

import { XernerxClient } from 'xernerx';
import config from './config.js';

const client = new (class Client extends XernerxClient<typeof config> {
	constructor() {
		super(
			{ intents: [1] },
			{
				// debug: true,
				log: {
					type: 'dynamic',
					levels: {
						info: true,
						warn: true,
						error: true,
						debug: true,
					},
				},
			},
			config
		);

		this.modules.eventHandler.loadEvents({
			directory: './dist/events',
		});
	}
})();

client;
