const { Inhibitor } = require("xernerx");

module.exports = class MessageInhibitor extends Inhibitor {
    constructor() {
        super('message', {
            name: "message",
            type: "message"
        })
    }

    check(message) {
        console.log("command:", message.util.commandName())
    }
}