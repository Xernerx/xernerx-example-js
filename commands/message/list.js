import { XernerxMessageCommand } from 'xernerx';

export default class ListCommand extends XernerxMessageCommand {
	constructor() {
		super('list', {
			name: 'list',
			description: 'List!',
			info: 'Create a list of predefined string values.',
			args: [
				{
					type: 'list',
					name: 'list',
					content: ['MessageCommand', 'SlashCommand', 'ContextCommand'],
				},
			],
		});
	}

	async exec(message, { args }) {
		return await message.util.reply({ content: `My list: ${args.list?.join(', ') || 'None'}` });
	}
}
