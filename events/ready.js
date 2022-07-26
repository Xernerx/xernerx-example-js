const { Event } = require('xernerx');

class ReadyEvent extends Event {
    constructor() {
        super('ready', {
            name: 'ready',
            once: false
        })
    }

    async run(client) {

        this.presence(client)
        setInterval(() => {
            this.presence(client)
        }, 60000)
    }

    presence(client) {
        let array = ["Dummi", "Tyman", "Clari"]

        client.user.setActivity({
            name: `${array[Math.floor(Math.random() * array.length)]} develop me.`,
            type: "STREAMING",
            url: "https://www.youtube.com/watch?v=j-a8An12QDs"
        })
    }
}

module.exports = ReadyEvent;