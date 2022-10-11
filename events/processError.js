import { Event, Discord } from 'xernerx';

export default class ProcessErrorEvent extends Event {
    constructor() {
        super('unhandledRejection', {
            name: 'unhandledRejection',
            type: "process",
            once: false
        })
    }

    async run(error) {
        console.log(error)
    }
}