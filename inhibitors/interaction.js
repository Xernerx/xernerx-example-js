import { InhibitorBuilder, Discord, InhibitorType } from 'xernerx';

export default class InteractionInhibitor extends InhibitorBuilder {
    constructor() {
        super('interaction', {
            name: "interaction",
            type: InhibitorType.Interaction
        })
    }

    check(interaction) {
    }
}