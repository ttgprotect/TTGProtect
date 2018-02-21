const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
    let warnUser = msg.mentions.members.first();
    let reason = args.slice(1).join(" ");

    // EMBEDS
    const noPerms = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setDescription(`:no_entry_sign: ${msg.author.username}, you don't have the pemission to run this command`)
        .setColor(0xff0000)
        .setFooter(`Contact your server admin for help is you belive this isn't right`)
    // ---------------------------------------------------
    const missingArgument_User = new Discord.RichEmbed()
        .setTitle(`Oops! :scream:`)
        .setDescription(`You're a missing a required argument (warnUser) in your message. The command can't continue without this, please add it and try again`)
        .setColor(0xff0000)
        .setFooter(`Contact a developer if you belive this is a mistake and the argument was entered`)
    // ---------------------------------------------------
    const missingArgument_Reason = new Discord.RichEmbed()
        .setTitle(`Oops! :scream:`)
        .setDescription(`You're a missing a required argument (reason) in your message. The command can't continue without this, please add it and try again`)
        .setColor(0xff0000)
        .setFooter(`Contact a developer if you belive this is a mistake and the argument was entered`)
    // ================================ END OF EMBEDS SECTION =====================================

    if(!msg.member.roles.some(r=>["Staff"].includes(r.name)) ) return msg.channel.send(noPerms);
    if (msg.mentions.users.size < 1) return msg.channel.send(missingArgument_User)
    if (reason.length < 1) return msg.channel.send(missingArgument_Reason)

    const embed1 = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setDescription(`**${warnUser.user.username}** has been warned.`)
        .setColor(0x00ff00)

    msg.channel.send(embed1)

    await warnUser.send({
        embed: {
          color: 0xFF0000,
          title: "Uh oh! :scream:",
          description: `You've been warned in **${msg.guild.name}** by **${msg.author.username}** with the reason **${reason}**`
          }
        })
} // No DB Used, simply DM's a mentioned use