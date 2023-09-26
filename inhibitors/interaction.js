import { XernerxInhibitor } from 'xernerx';

export default class InteractionInhibitor extends XernerxInhibitor {
	constructor() {
		super('interaction', {
			name: 'interaction',
			type: 'interaction',
		});
	}

	check(interaction) {
		// console.log(interaction);
	}
}
