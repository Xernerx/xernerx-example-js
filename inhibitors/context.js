import { InhibitorBuilder, Discord, InhibitorType } from 'xernerx';

export default class ContextInhibitor extends InhibitorBuilder {
    constructor() {
        super('context', {
            name: "context",
            type: InhibitorType.ContextCommand
        })
    }

    check(context) {
    }
}