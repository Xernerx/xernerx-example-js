import { ContextCommand, ContextCommandType, Discord } from "xernerx";

export default class ServerCommand extends ContextCommand {
    constructor() {
        super('server', {
            name: 'Server Info',
            type: ContextCommandType.Message,
        })
    }

    async exec(interaction) {
        console.log(interaction.util.getCommands())
        // let guild = interaction.member.guild, vc = [], tc = [], sc = [], humans = [], bots = [];

        // let owner = await this.client.users.fetch(guild.ownerId);

        // guild.channels.cache.map(c => {
        //     if (c.type === ChannelType.GuildText) vc.push(c);

        //     if (c.type === ChannelType.GuildVoice) tc.push(c);

        //     if (c.type === ChannelType.GuildStageVoice) sc.push(c);
        // })

        // guild.members.cache.map(m => {
        //     if (m.user.bot) bots.push(m);

        //     else humans.push(m);
        // })

        // let embed = new Discord.EmbedBuilder()
        //     .setThumbnail(guild.iconURL({ dynamic: true }))
        //     .setTitle(guild.name)
        //     .setAuthor({ name: `${owner.username}'s server`, iconURL: owner.avatarURL({ dynamic: true }) })
        //     .setDescription(guild.description || "No server description.")
        //     .setColor(this.client.color.FLAGS.cyan)
        //     .setTimestamp()
        //     .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) })
        //     .setImage(guild.banner)
        //     .addFields([
        //         {
        //             name: "Features",
        //             value: guild.features.map(f => toPhraseCase(f, true).replace(/_/g, " ")).join(', ')
        //         },
        //         {
        //             name: "Members",
        //             value: `${guild.memberCount} | ${guild.maximumMembers}\nHumans: ${humans.length}\nBots: ${bots.length}`,
        //             inline: true
        //         },
        //         {
        //             name: "Channels",
        //             value: `Voice: ${vc.length}\nText: ${tc.length}\nStage: ${sc.length}`,
        //             inline: true
        //         },
        //         {
        //             name: "Roles",
        //             value: `${guild.roles.cache.map(r => r).length}`,
        //             inline: true
        //         },
        //         {
        //             name: "Created",
        //             value: `<t:${Math.round(guild.createdTimestamp / 1000)}:D> (<t:${Math.round(guild.createdTimestamp / 1000)}:R>)`,
        //             inline: true
        //         }
        //         ,
        //         {
        //             name: "You joined",
        //             value: `<t:${Math.round(guild.joinedTimestamp / 1000)}:D> (<t:${Math.round(guild.joinedTimestamp / 1000)}:R>)`,
        //             inline: true
        //         }
        //     ])

        // interaction.util.reply({ embeds: [embed] });
    }
}