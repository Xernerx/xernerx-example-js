import { Inhibitor, Discord, InhibitorType } from 'xernerx';

export default class UserInhibitor extends Inhibitor {
    constructor() {
        super('user', {
            name: "user",
            type: InhibitorType.User
        })
    }

    check(event, user) {
        // console.log("username:", user?.username);
    }
}