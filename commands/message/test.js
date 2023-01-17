import { MessageCommandBuilder, Discord } from 'xernerx';

export default class TestCommand extends MessageCommandBuilder {
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
        message.util.reply({ content: '**TESTING!**' })
    }
}