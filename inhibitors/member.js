import { InhibitorBuilder } from 'xernerx';

export default class MemberInhibitor extends InhibitorBuilder {
	constructor() {
		super('member', {
			name: 'member',
			type: 'member',
		});
	}

	check(action, member) {
		// console.log(member);
	}
}
