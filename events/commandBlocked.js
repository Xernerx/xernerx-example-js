const { Event } = require('xernerx');

class CommandBlockedEvent extends Event {
    constructor() {
        super('commandBlocked', {
            name: 'commandBlocked',
            once: false
        })
    }

    async run(action, reason) {
        return action.reply(`Command Block Occurred, reason ${reason}`);
    }
}

module.exports = CommandBlockedEvent;