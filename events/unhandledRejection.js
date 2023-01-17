import { EventBuilder, Discord } from 'xernerx';

export default class UnhandledRejectionEvent extends EventBuilder {
    constructor() {
        super('unhandledRejection', {
            name: 'unhandledRejection',
            emitter: "process",
            once: false
        })
    }

    async run(error) {
        console.log(error)
    }
}