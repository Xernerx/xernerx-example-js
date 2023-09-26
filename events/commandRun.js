import { XernerxEvent } from 'xernerx';

export default class CommandRunEvent extends XernerxEvent {
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