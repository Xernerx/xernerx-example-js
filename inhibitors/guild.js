import { InhibitorBuilder } from 'xernerx';

export default class GuildInhibitor extends InhibitorBuilder {
	constructor() {
		super('guild', {
			name: 'guild',
			type: 'guild',
		});
	}

	check(action, guild) {
		// console.log(guild);
	}
}
