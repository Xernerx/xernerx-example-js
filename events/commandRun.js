const { Event } = require('xernerx');

class CommandRunEvent extends Event {
    constructor() {
        super('commandRun', {
            name: 'commandRun',
            type: "client",
            once: false
        })
    }

    async run(action, type, command) {
        console.log(command?.data?.name || command.id)
    }
}

module.exports = CommandRunEvent;