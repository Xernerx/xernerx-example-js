import { MessageCommand, Discord } from 'xernerx';

export default class TestCommand extends MessageCommand {
    constructor() {
        super('test', {
            name: 'test',
            description: 'Pong!',
            args: [{
                name: 'test',
                type: 'user'
            }]
        })
    }

    async exec(message, args) {
        let embeds = [];

        for (let i = 0; i < 15; i++) {
            embeds.push(new Discord.EmbedBuilder().setTitle(String(i)))
        }

        message.util.buttonPaginator(embeds);
    }
}