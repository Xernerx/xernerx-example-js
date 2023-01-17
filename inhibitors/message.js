import { InhibitorBuilder, Discord, InhibitorType } from 'xernerx';

export default class MessageInhibitor extends InhibitorBuilder {
    constructor() {
        super('message', {
            name: "message",
            type: InhibitorType.Message
        })
    }

    check(message) {

    }
}