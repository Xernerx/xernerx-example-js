import { InhibitorBuilder } from 'xernerx';

export default class UserInhibitor extends InhibitorBuilder {
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
