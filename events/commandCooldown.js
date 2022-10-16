import { Event, Discord } from 'xernerx';

export default class CommandCooldownEvent extends Event {
    constructor() {
        super('commandCooldown', {
            name: 'commandCooldown',
            emitter: "client",
            once: false
        })
    }

    async run(action, command, user, time) {
    }
}