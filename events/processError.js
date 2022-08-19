const { Event } = require('xernerx');

class ProcessErrorEvent extends Event {
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

module.exports = ProcessErrorEvent;