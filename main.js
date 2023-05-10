import { XernerxClient, GatewayIntentBits, ExtensionBuilder } from 'xernerx';
// import { XernerxCommands } from 'xernerx-commands';
// import XernerxLanguage from 'xernerx-language';
// import XernerxDatabase from 'xernerx-database';

import config from './data/config/config.js';

new (class Client extends XernerxClient {
	constructor() {
		super(
			{
				intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
			},
			{
				ownerId: ['482513687417061376'],
				local: '784094726432489522',
				global: false,
				cooldown: {
					default: 5000,
				},
				log: {
					ready: true,
					info: true,
					error: true,
					// table: ['name', 'fileType'],
				},
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
			logging: true,
		});

		this.modules.commandHandler.loadSlashCommands({
			directory: './commands/slash',
			guildId: config.guildId,
			global: false,
			defer: {
				reply: true,
			},
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

		this.modules.extensionHandler.loadExtensions(new ExtensionBuilder('test'));

		// this.modules.webhookHandler.loadWebhooks({
		// 	token: config.webhook.topgg.token,
		// });

		this.connect(config.token1);

		// this.loadAllExtensions({
		// 	extensions: [
		// 		new XernerxCommands(this, {
		// 			prefix: 'xc',
		// 			exclude: ['ping'],
		// 		}),
		// 		new XernerxLanguage(this, {
		// 			directory: './data/languages',
		// 		}),
		// 		new XernerxDatabase.default(this, {
		// 			builder: './build',
		// 		}),
		// 	],
		// 	logging: true,
		// });
	}
})();
