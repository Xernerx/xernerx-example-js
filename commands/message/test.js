/** @format */

import { XernerxMessageCommand } from 'xernerx';

export default class TestCommand extends XernerxMessageCommand {
	constructor() {
		super('test', {
			name: 'test',
			aliases: ['tast'],
			description: 'A test command for new features.',
		});
	}

	async exec(message) {
		console.log(this.util.parsed);
		return await this.util.reply({ content: String(message.util.parsed.alias) });
	}
}
