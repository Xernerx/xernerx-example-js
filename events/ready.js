import { Event, Discord } from 'xernerx';

export default class ReadyEvent extends Event {
    constructor() {
        super('ready', {
            name: 'ready',
            emitter: 'client',
            once: false
        })
    }

    async run(client) {

        this.presence(client)
        setInterval(() => {
            this.presence(client)
        }, 60000)
    }

    async presence(client) {
        let owners = [];
        for (const owner of this.client.settings.ownerId) {
            owners.push((await this.client.users.fetch(owner)).tag)
        }

        client.user.setPresence({
            activities: [{
                name: `${owners[Math.floor(Math.random() * owners.length)]} develop me.`,
                type: Discord.ActivityType.Streaming,
                url: "https://www.youtube.com/watch?v=j-a8An12QDs"
            }]
        })
    }
}