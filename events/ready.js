const { Event } = require('xernerx');

class ReadyEvent extends Event {
    constructor() {
        super('ready', {
            name: 'ready',
            once: false
        })
    }

    async run(client) {
        console.log(`${client.user.username} is online!`)
    }
}

module.exports = ReadyEvent;