const { Inhibitor } = require("xernerx");

module.exports = class GuildInhibitor extends Inhibitor {
    constructor() {
        super('guild', {
            name: "guild",
            type: "guild"
        })
    }

    check(event, guild) {
        console.log("guild:", guild.name);
    }
}