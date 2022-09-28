const { Inhibitor } = require("xernerx");

module.exports = class MemberInhibitor extends Inhibitor {
    constructor() {
        super('member', {
            name: "member",
            type: "member"
        })
    }

    check(event, member) {
        console.log("nickname:", member.nickname);
    }
}