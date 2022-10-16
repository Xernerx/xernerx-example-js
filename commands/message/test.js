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
        message.util.reply({ content: '**TESTING!**' })
    }
}