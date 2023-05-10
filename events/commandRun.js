import { EventBuilder } from 'xernerx';

export default class CommandRunEvent extends EventBuilder {
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