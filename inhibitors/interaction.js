import { Inhibitor, Discord, InhibitorType } from 'xernerx';

export default class InteractionInhibitor extends Inhibitor {
    constructor() {
        super('interaction', {
            name: "interaction",
            type: InhibitorType.Interaction
        })
    }

    check(interaction) {
        // console.log("command:", interaction.util.commandName())
    }
}