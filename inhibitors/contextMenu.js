import { Inhibitor, Discord, InhibitorType } from 'xernerx';

export default class ContextMenuInhibitor extends Inhibitor {
    constructor() {
        super('contextMenu', {
            name: "contextMenu",
            type: InhibitorType.ContextCommand
        })
    }

    check(context) {
        // console.log("command:", context.util.commandName());
    }
}