import { EventBuilder } from 'xernerx';

export default class CommandCooldownEvent extends EventBuilder {
    constructor() {
        super('commandCooldown', {
            name: 'commandCooldown',
            emitter: "client",
            once: false
        })
    }

    async run(action, command, user) {
        action.util.reply({ content: `You can't use this command for another ${Object.values(this.client.util.getCooldownTimers((action.user || action.author).id, command.data?.name || command.name).shift()) / 1000}s`, ephemeral: true })
    }
}