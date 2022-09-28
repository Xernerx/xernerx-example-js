const { Inhibitor } = require("xernerx");

module.exports = class UserInhibitor extends Inhibitor {
    constructor() {
        super('user', {
            name: "user",
            type: "user"
        })
    }

    check(event, user) {
        console.log("username:", user?.username);
    }
}