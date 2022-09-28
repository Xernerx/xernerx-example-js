const { MessageCommand } = require('xernerx');

module.exports = class SecretCommand extends MessageCommand {
    constructor() {
        super('secret', {
            name: 'secret',
            description: 'Pong!',
            prefix: ['???']
        })
    }

    async exec(message) {
        return await message.util.reply(`You found me!`)
    }
}