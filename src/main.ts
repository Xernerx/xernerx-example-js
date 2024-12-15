/** @format */

import { XernerxClient } from 'xernerx';
import { config } from 'dotenv';

config();

const client = new (class Client extends XernerxClient<typeof settings> {
	constructor() {
		super(
			{ intents: [1, 'MessageContent', 'GuildMessages'] },
			{
				// debug: true,
				token: process.env.token,
				log: {
					type: 'dynamic',
					levels: {
						info: true,
						warn: true,
						error: true,
						debug: true,
					},
				},
			}
		);

		this.modules.eventHandler.loadEvents({
			directory: './dist/events',
		});

		this.modules.commandHandler.loadMessageCommands({
			directory: './dist/commands/message',
		});
	}
})();

client;
