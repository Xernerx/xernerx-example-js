import { XernerxMessageCommand } from 'xernerx';

export default class ArgumentsCommand extends XernerxMessageCommand {
	constructor() {
		super('arguments', {
			name: 'arguments',
			description: 'A command that shows off all arguments for message commands.',
			cooldown: 5000,
			args: [
				{ type: 'option', name: 'option', match: ['hello', 'mom'] },
				{ type: 'number', name: 'number' },
				{ type: 'integer', name: 'integer' },
				{ type: 'boolean', name: 'boolean' },
				{ type: 'confirm', name: 'confirm' },
				{ type: 'channel', name: 'channel' },
				{ type: 'guild', name: 'guild' },
				{ type: 'mentionable', name: 'mentionable' },
				{ type: 'role', name: 'role' },
				{ type: 'user', name: 'user' },
				{ type: 'member', name: 'member' },
				{ type: 'list', name: 'list' },
				{ type: 'string', name: 'string' },
				{ type: 'rest', name: 'rest' },
			],
			flags: [
				{
					name: 'flag',
					match: '--flag',
				},
				{
					name: 'ping',
					match: '--ping',
				},
			],
		});
	}

	async exec(message, { args, flags }) {
		return await message.util.reply({ content: String('>>> ' + args + '\n\n' + flags) });
	}
}
