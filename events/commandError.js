import { EventBuilder, Discord } from 'xernerx';

export default class CommandErrorEvent extends EventBuilder {
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