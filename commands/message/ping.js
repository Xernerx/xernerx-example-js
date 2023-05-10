import { MessageCommandBuilder } from 'xernerx';

export default class PingCommand extends MessageCommandBuilder {
	constructor() {
		super('ping', {
			name: 'ping',
			description: 'Pong!',
			info: "Get the bot's latency!",
		});
	}

	async exec(message) {
		return await message.util.reply({ content: `My ping: \`${this.client.ws.ping}ms.\`` });
	}
}
