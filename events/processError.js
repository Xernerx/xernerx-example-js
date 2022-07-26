const { Event } = require('xernerx');

class ProcessErrorEvent extends Event {
    constructor() {
        super('unhandledRejection', {
            name: 'unhandledRejection',
            process: true
        })
    }

    async run(error) {
        console.log(error)
    }
}

module.exports = ProcessErrorEvent;