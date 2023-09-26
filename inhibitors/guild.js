import { XernerxInhibitor } from 'xernerx';

export default class GuildInhibitor extends XernerxInhibitor {
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
