import { Event, Discord } from 'xernerx';

export default class CommandBlockEvent extends Event {
    constructor() {
        super('commandBlock', {
            name: 'commandBlock',
            emitter: "client",
            once: false
        })
    }

    async run(event, reason, missing) {

    }
}