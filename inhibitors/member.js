import { InhibitorBuilder, Discord, InhibitorType } from 'xernerx';

export default class MemberInhibitor extends InhibitorBuilder {
    constructor() {
        super('member', {
            name: "member",
            type: InhibitorType.Member
        })
    }

    check(event, member) {
    }
}