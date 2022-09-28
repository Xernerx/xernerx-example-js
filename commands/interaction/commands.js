const { InteractionCommand, Discord: { EmbedBuilder }, version, Discord } = require('xernerx');

module.exports = class CommandsCommand extends InteractionCommand {
    constructor() {
        super('commands', {
            name: 'commands',
            description: 'Get info on the Framework',
            info: `Xernerx is a lightweight class based Discord.js framework. It has handlers for pretty much anything: interaction commands, message commands, context menu commands, events, custom events, error handling, i18next.`
        })
    }

    async exec(interaction) {
        // const commands = [];

        // (this.client.commands).map(cmds => {
        //     commands.push(...cmds)
        // })

        console.log(interaction.util.commandName("subcommands"))
    }
}