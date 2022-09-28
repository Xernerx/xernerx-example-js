const { Inhibitor } = require("xernerx");

module.exports = class InteractionInhibitor extends Inhibitor {
    constructor() {
        super('interaction', {
            name: "interaction",
            type: "interaction"
        })
    }

    check(interaction) {
        console.log("command:", interaction.util.commandName())
    }
}