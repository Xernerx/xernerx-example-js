import { Inhibitor, Discord, InhibitorType } from 'xernerx';

export default class ContextInhibitor extends Inhibitor {
    constructor() {
        super('context', {
            name: "context",
            type: InhibitorType.ContextCommand
        })
    }

    check(context) {
    }
}