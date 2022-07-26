const { Event } = require('xernerx');

class ErrorEvent extends Event {
    constructor() {
        super('error', {
            name: 'error',
            once: false
        })
    }

    async run(action, error) {
        return action.reply(`An Error Occurred\nError:\`\`\`js\n${error.stack}\`\`\``)
    }
}

module.exports = ErrorEvent;