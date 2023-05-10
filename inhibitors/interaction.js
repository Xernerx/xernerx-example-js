import { InhibitorBuilder } from 'xernerx';

export default class InteractionInhibitor extends InhibitorBuilder {
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
