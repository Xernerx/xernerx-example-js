/** @format */

import { XernerxMessage, XernerxMessageCommandBuilder } from 'xernerx';

export default class TestCommand extends XernerxMessageCommandBuilder {
	constructor() {
		super('test', {
			name: 'test',
			aliases: ['tast'],
			description: 'Test!',
		});
	}

	override async exec(message: XernerxMessage) {
		message.util.reply('test!');
	}
}
