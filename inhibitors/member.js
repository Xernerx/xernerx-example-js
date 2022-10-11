import { Inhibitor, Discord, InhibitorType } from 'xernerx';

export default class MemberInhibitor extends Inhibitor {
    constructor() {
        super('member', {
            name: "member",
            type: InhibitorType.Member
        })
    }

    check(event, member) {
        console.log("nickname:", member.nickname);
    }
}