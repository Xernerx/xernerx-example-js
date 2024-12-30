/** @format */

import { XernerxMessageCommandBuilder } from 'xernerx';

export default class PingCommand extends XernerxMessageCommandBuilder {
	constructor() {
		super('ping', {
			name: 'ping',
			aliases: ['pong'],
			description: 'Ping!',
		});
	}
}
