const { ContextMenuCommand } = require("xernerx/models/commands/ContextMenuCommand");

class UserCommand extends ContextMenuCommand {
    constructor() {
        super('user', {
            name: 'User Info',
            type: "USER"
        })
    }

    async exec(interaction) {
        interaction.reply(`Your name is ${interaction.user.username}`)
    }
}

module.exports = UserCommand;