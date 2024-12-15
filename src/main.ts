/** @format */

import { XernerxClient } from 'xernerx';
import { config } from 'dotenv';

const settings = config() as { token: string };

const client = new (class Client extends XernerxClient<typeof settings> {
	constructor() {
		super(
			{ intents: [1, 'MessageContent', 'GuildMessages'] },
			{
				// debug: true,
				token: settings.token,
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
			settings
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
