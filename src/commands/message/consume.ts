/** @format */

import { XernerxMessage, XernerxMessageCommandBuilder } from 'xernerx';

export default class ConsumeCommand extends XernerxMessageCommandBuilder {
	constructor() {
		super('consume', {
			name: 'consume',
			aliases: ['use'],
			description: 'Consume!',
		});
	}

	override async exec(message: XernerxMessage) {
		let item;

		for (const entitlement of message.author.premium.items) {
			typeof entitlement.consumed == 'boolean';

			item = entitlement;
			break;
		}

		item?.consume().then((data) => {
			return message.util.reply(data.message);
		});
	}
}
