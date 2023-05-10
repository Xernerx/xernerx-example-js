import { MessageCommandBuilder } from 'xernerx';

export default class SecretCommand extends MessageCommandBuilder {
	constructor() {
		super('secret', {
			name: 'secret',
			description: 'A secret command to show off that individual prefixes work',
			prefix: ['???'],
		});
	}

	async exec(message) {
		return await message.util.reply(`You found me!`);
	}
}
