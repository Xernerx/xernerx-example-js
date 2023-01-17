import { InhibitorBuilder, Discord, InhibitorType } from 'xernerx';

export default class UserInhibitor extends InhibitorBuilder {
    constructor() {
        super('user', {
            name: "user",
            type: InhibitorType.User
        })
    }

    check(event, user) {
    }
}