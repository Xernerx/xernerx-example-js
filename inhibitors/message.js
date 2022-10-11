import { Inhibitor, Discord, InhibitorType } from 'xernerx';

export default class MessageInhibitor extends Inhibitor {
    constructor() {
        super('message', {
            name: "message",
            type: InhibitorType.Message
        })
    }

    check(message) {
        // console.log("command:", message.util.commandName())
    }
}