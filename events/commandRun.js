import { Event, Discord } from 'xernerx';

export default class CommandRunEvent extends Event {
    constructor() {
        super('commandRun', {
            name: 'commandRun',
            emitter: "client",
            once: false
        })
    }

    async run(action, type, command) {
    }
}