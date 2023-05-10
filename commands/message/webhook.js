import { MessageCommandBuilder } from 'xernerx';

export default class TransformCommand extends MessageCommandBuilder {
	constructor() {
		super('transform', {
			name: 'transform',
			description: 'A command to transform your message into a webhook that looks like you.',
			args: [
				{
					name: 'content',
					type: 'rest',
				},
			],
		});
	}

	async exec(message, { args }) {
		await message.util.webhookReply({ content: args.content }, undefined, message.author);
		return await message.delete();
	}
}
