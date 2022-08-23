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
        console.log(action.util.commandName())
    }
}

module.exports = CommandRunEvent;