/** @format */

import { XernerxEvent, EmbedBuilder } from 'xernerx';

export default class CommandBlockEvent extends XernerxEvent {
	constructor() {
		super('commandBlock', {
			name: 'commandBlock',
			emitter: 'client',
			once: false,
		});
	}

	run(event, info, command) {
		console.log(info);
		const embed = new EmbedBuilder()
			.setTitle('Command Block')
			// .setURL(`${this.client.config.links.js}/events/${this.name}.js`)
			.setDescription(info.message)
			// .setColor(this.client.config.color)
			.setFooter({
				text: (event.user || event.author).username,
				iconUrl: (event.user || event.author).avatarURL({ dynamic: true }),
			})
			.setTimestamp();

		event.util.reply({ embeds: [embed], ephemeral: true });
	}
}
