import { Event, Discord } from 'xernerx';

export default class CommandRunEvent extends Event {
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