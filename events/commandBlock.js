import { EventBuilder, EmbedBuilder } from 'xernerx';

export default class CommandBlockEvent extends EventBuilder {
	constructor() {
		super('commandBlock', {
			name: 'commandBlock',
			emitter: 'client',
			once: false,
		});
	}

	run(event, reason, missing) {
		const embed = new EmbedBuilder()
			.setTitle('Command Block')
			.setURL(`${this.client.config.links.js}/events/${this.name}.js`)
			.setDescription(`Your command has been blocked because of ${reason}`)
			.setColor(this.client.config.color)
			.setFooter({
				text: (event.user || event.author).username,
				iconUrl: (event.user || event.author).avatarURL({ dynamic: true }),
			})
			.setTimestamp();

		if (Array.isArray(missing)) {
			embed.addFields([{ name: "You're missing the following", value: missing.join(', '), inline: true }]);
		} else {
			embed.addFields([{ name: "You're missing the following", value: String(missing), inline: true }]);
		}

		event.util.reply({ embeds: [embed], ephemeral: true });
	}
}
