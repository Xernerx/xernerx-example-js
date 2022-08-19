const { Event } = require('xernerx');

class ErrorEvent extends Event {
    constructor() {
        super('error', {
            name: 'error',
            type: "client",
            once: false
        })
    }

    async run(action, error) {
        return action.util.reply(`An Error Occurred\nError:\`\`\`js\n${error.stack}\`\`\``)
    }
}

module.exports = ErrorEvent;