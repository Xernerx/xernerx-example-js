import { Inhibitor, Discord, InhibitorType } from 'xernerx';

export default class GuildInhibitor extends Inhibitor {
    constructor() {
        super('guild', {
            name: "guild",
            type: InhibitorType.Guild
        })
    }

    check(event, guild) {
        // console.log("guild:", guild.name);
    }
}