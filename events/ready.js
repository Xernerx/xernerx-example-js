import { EventBuilder, Discord } from 'xernerx';

export default class ReadyEvent extends EventBuilder {
    constructor() {
        super('ready', {
            name: 'ready',
            emitter: 'client',
            once: false
        })
    }

    async run(client) {
        this.client.util.setPresence({
            text: "Dummi",
            type: Discord.ActivityType.Streaming,
            link: "https://www.youtube.com/watch?v=5NPBIwQyPWE",
            interval: 60000
        })
    }
}