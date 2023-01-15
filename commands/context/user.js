import { ContextCommand, ContextCommandType, Discord } from "xernerx";

export default class UserCommand extends ContextCommand {
    constructor() {
        super('user', {
            name: 'User Info',
            type: ContextCommandType.User,
        })
    }

    async exec(interaction) {
        let member = await interaction.guild.members.fetch(interaction.targetId);

        let embed = new Discord.EmbedBuilder()
            .setTitle(member.user.username)
            .setAuthor({ name: member.nickname })
            .setThumbnail(member.user.avatarURL({ dynamic: true }))
            .addFields([
                { name: 'Tag', value: member.user.tag },
                { name: "Type", value: member?.user?.bot ? "Bot" : (member?.user?.system ? "System" : "User") },
                { name: 'Permissions', value: member.permissions.toArray().join(', ') },
                { name: 'Roles', value: member.roles.cache.map(r => r).join(', ') || 'None' },
                { name: 'Created', value: `<t:${Math.round(member.user.createdTimestamp / 1000)}:R>` },
                { name: 'Joined', value: `<t:${Math.round(member.joinedTimestamp / 1000)}:R>` },
            ])

        interaction.util.reply({ embeds: [embed] });
    }
}
