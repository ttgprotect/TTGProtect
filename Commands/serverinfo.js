const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
        const embed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
            .setTitle(`Serverinfo`)
            .setDescription(`Info about ${msg.guild.name}`)
            .addField(`Name`, `${msg.guild.name}`, true)
            .addField(`ID`, `${msg.guild.id}`, true)
            .addField(`Members`, `${msg.guild.memberCount}`, true)
            .addField(`Owner`, `${msg.guild.owner.user.tag}`, true)
            .setThumbnail(msg.guild.iconURL)
            .setColor(0x157f87)
            .setFooter(`${bot.user.username} v${config.version}`)
        msg.channel.send(embed)

        if(msg.channel.type === "dm") {
            return msg.channel.send(`:warning: This isn't a server! It's a DM`)
        }
}