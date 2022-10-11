import { Event, Discord } from 'xernerx';

export default class ErrorEvent extends Event {
    constructor() {
        super('error', {
            name: 'commandError',
            type: "client",
            once: false
        })
    }

    async run(action, error) {
        console.log(error)
    }
}