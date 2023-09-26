import { XernerxMessageCommand } from 'xernerx';

export default class XernerxCommand extends XernerxMessageCommand {
	constructor() {
		super('xernerx', {
			name: 'xernerx',
			regex: /help|what is this/gi,
			description: 'Get info on what xernerx framework is',
		});
	}

	async exec(message) {
		return await message.util.reply(
			`I'm ${this.client.user} and I'm the test bot for the xernerx framework and anything to do with it!`
		);
	}
}
