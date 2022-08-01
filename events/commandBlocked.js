const { Event } = require('xernerx');

class CommandBlockedEvent extends Event {
    constructor() {
        super('commandBlocked', {
            name: 'commandBlocked',
            once: false
        })
    }

    async run(action, reason, missing) {
        if (!isNaN(missing)) missing = [`${missing}ms`]
        return action.reply(`Command Block Occurred, reason ${reason}. If applied, you're missing the following: ${missing?.join(', ')}`);
    }
}

module.exports = CommandBlockedEvent;