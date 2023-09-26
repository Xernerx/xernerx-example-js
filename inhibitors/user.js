import { XernerxInhibitor } from 'xernerx';

export default class UserInhibitor extends XernerxInhibitor {
	constructor() {
		super('user', {
			name: 'user',
			type: 'user',
		});
	}

	check(action, user) {
		// console.log(user);
		// return action.util.reply(String(action.user.id === action.user.id));
	}
}
