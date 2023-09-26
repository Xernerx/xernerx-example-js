import { XernerxEvent } from 'xernerx';

export default class CommandErrorEvent extends XernerxEvent {
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