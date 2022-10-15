import { Event, Discord } from 'xernerx';

export default class CommandBlockedEvent extends Event {
    constructor() {
        super('commandBlocked', {
            name: 'commandBlocked',
            type: "client",
            once: false
        })
    }

    async run(event, reason, missing) {
        // let embed = new Discord.EmbedBuilder()
        //     .setTitle('Command block')
        //     .setColor(this.client.color.embed)
        //     .setTimestamp()
        //     .setAuthor({ name: (event.user || event.author).username, iconURL: (event.user || event.author).avatarURL({ dynamic: true }) })
        //     .setDescription(`The reason of this command block is ${reason}.`)

        // if (!isNaN(missing)) missing = [`Your cooldown will end in ${missing}ms.`]

        // if (missing !== undefined) embed.addFields([{ name: "Extra info", value: missing?.join(', ') }])


        // return event.util.reply({ content: null, embeds: [embed], components: null, ephemeral: true });
    }
}