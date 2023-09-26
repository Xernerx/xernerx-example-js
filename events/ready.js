/** @format */

import { XernerxEvent, ActivityType } from 'xernerx';

export default class ReadyEvent extends XernerxEvent {
	constructor() {
		super('ready', {
			name: 'ready',
			emitter: 'client',
			once: false,
		});
	}

	async run(client) {
		// console.log(this.client.cooldowns.add('users', 'me', 'iscool'));
		// console.log(this.client.cooldowns.has('me'));
		// console.log(this.client.cooldowns.delete('users', 'me'));

		// this.client.util.setPresence({
		// 	text: 'Dummi',
		// 	type: ActivityType.Streaming,
		// 	link: 'https://www.youtube.com/watch?v=5NPBIwQyPWE',
		// 	interval: 60000,
		// });

		for (const key of Object.keys(this.client.modules)) {
			console.log(key, this.client.modules[key].readyTimestamp);
		}
	}
}
