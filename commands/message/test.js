import { MessageCommandBuilder } from 'xernerx';

export default class TestCommand extends MessageCommandBuilder {
	constructor() {
		super('test', {
			name: 'test',
			aliases: ['tast'],
			description: 'A test command for new features.',
		});
	}

	async exec(message) {
		return await message.util.reply({ content: String(message.util.parsed.alias) });
	}
}
