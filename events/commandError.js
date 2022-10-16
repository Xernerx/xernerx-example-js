import { Event, Discord } from 'xernerx';

export default class CommandErrorEvent extends Event {
    constructor() {
        super('commandError', {
            name: 'commandError',
            emitter: "client",
            once: false
        })
    }

    async run(action, error) {
        console.log(error)
    }
}