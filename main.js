/** @format */

import { XernerxClient, XernerxIntents } from 'xernerx';

import config from './data/config/config.js';

new (class Client extends XernerxClient {
	constructor() {
		super(
			{
				intents: XernerxIntents.All,
			},
			{
				ownerId: ['482513687417061376'],
				local: '784094726432489522',
				global: false,
				ceaseless: true,
				permissions: {
					// client: ['manage channels', 'ban members', 'add reactions'],
					user: ['administrator'],
				},
				cooldown: {
					default: 35000,
					collections: ['users'],
				},
				log: true,
			},
			config
		);

		this.modules.commandHandler.loadMessageCommands({
			prefix: config.prefix,
			directory: './commands/message',
			handleDeletes: true,
			handleEdits: true,
			handleTyping: true,
			allowMention: true,
			cooldown: 45000,
		});

		this.modules.commandHandler.loadSlashCommands({
			directory: './commands/slash',
			guildId: config.guildId,
			global: false,
			// defer: {
			// 	reply: true,
			// },
			logging: true,
			cooldown: 2000,
		});

		this.modules.commandHandler.loadContextCommands({
			directory: './commands/context',
			guildId: config.guildId,
			global: false,
			logging: true,
			cooldown: 2000,
		});

		this.modules.eventHandler.loadEvents({
			directory: './events',
			logging: true,
		});

		this.modules.inhibitorHandler.loadInhibitors({
			directory: './inhibitors',
			logging: true,
		});

		// this.modules.webhookHandler.loadWebhooks({
		// 	token: config.webhook.topgg.token,
		// });

		this.connect(config.token);
	}
})();
