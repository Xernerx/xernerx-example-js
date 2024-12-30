/** @format */

import { EmbedBuilder, XernerxMessage, XernerxMessageCommandBuilder } from 'xernerx';

export default class PremiumCommand extends XernerxMessageCommandBuilder {
	constructor() {
		super('premium', {
			name: 'premium',
			aliases: ['store'],
			description: 'Premium!',
		});
	}

	override async exec(message: XernerxMessage) {
		const embed = new EmbedBuilder()
			.setColor('#ff0000')
			.setURL(message.util.markdown.store())
			.setTitle('Subscriptions and Payments')
			.addFields({ name: 'Subscriptions', value: 'These are durable and subscripted items you possess!' });

		message.user.premium.items.filter((item) => ['Subscription', 'Durable'].includes(item.sku.type)).map((item) => embed.addFields({ name: item.details.name, value: item.sku.type, inline: true }));

		embed.addFields({ name: 'Available boosters', value: 'These are the boosters you still have not consumed' });

		message.user.premium.items.filter((item) => !['Subscription', 'Durable'].includes(item.sku.type)).map((item) => embed.addFields({ name: item.details.name, value: item.sku.type, inline: true }));

		embed.addFields({ name: 'History', value: 'Here is your purchase history' });

		message.user.premium.archive.map((item) => embed.addFields({ name: item.details.name, value: item.sku.type, inline: true }));

		message.util.reply({ embeds: [embed] });
	}
}
