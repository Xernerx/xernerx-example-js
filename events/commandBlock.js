import { Event, Discord } from 'xernerx';
import { inspect } from 'util';
export default class CommandBlockEvent extends Event {
    constructor() {
        super('commandBlock', {
            name: 'commandBlock',
            emitter: "client",
            once: false
        })
    }

    async run(event, reason, missing) {
        event.reply({ content: `block, ${reason}, ${missing}`, ephemeral: true })
    }
}