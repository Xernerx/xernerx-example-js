import { InhibitorBuilder, Discord, InhibitorType } from 'xernerx';

export default class GuildInhibitor extends InhibitorBuilder {
    constructor() {
        super('guild', {
            name: "guild",
            type: InhibitorType.Guild
        })
    }

    check(event, guild) {
    }
}