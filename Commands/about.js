const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
        const embed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
            .setTitle(`About`)
            .setDescription(`${bot.user.username} by ${config.creator}. With help from contributors :dizzy:   [Support Server](https://discord.io/ttgprotect)`)
            .addField(`Version`, `${config.version}`, true)
            .addField(`Branch`, `${config.branch}`, true)
            .addField(`Prefix`, `${config.prefix}`, true)
            .addField(`Tag`, `${bot.user.tag}`, true)
            .addField(`ID`, `${bot.user.id}`, true)
            .addField(`Discord.js Version`, `${Discord.version}`, true)
            .setColor(0x157f87)
            .setFooter(`${bot.user.username} v${config.version}`)
        msg.channel.send(embed)
}