import { XernerxInhibitor } from 'xernerx';

export default class MemberInhibitor extends XernerxInhibitor {
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
