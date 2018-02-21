const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
        const embed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
            .setTitle(`Statistics`)
            .setDescription(`Statistics about ${bot.user.username}`)
            .addField(`Servers`, `${bot.guilds.size}`, true)
            .addField(`Users`, `${bot.users.size}`, true)
            .addField(`Channels`, `${bot.channels.size}`, true)
            .setColor(0x157f87)
            .setFooter(`${bot.user.username} v${config.version}`)
        msg.channel.send(embed)
}