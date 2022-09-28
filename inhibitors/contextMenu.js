const { Inhibitor } = require("xernerx");

module.exports = class ContextMenuInhibitor extends Inhibitor {
    constructor() {
        super('contextMenu', {
            name: "contextMenu",
            type: "contextMenu"
        })
    }

    check(context) {
        console.log("command:", context.util.commandName());
    }
}