import { Event, Discord } from 'xernerx';

export default class UnhandledRejectionEvent extends Event {
    constructor() {
        super('unhandledRejection', {
            name: 'unhandledRejection',
            emitter: "process",
            once: false
        })
    }

    async run(error) {
    }
}