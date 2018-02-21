const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
    if(!msg.member.roles.some(r=>["Staff"].includes(r.name)) ) {
        const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setTitle(`__**HELP**__`)
        .addField(`ping`, `Ping the bot`, false)
        .addField(`about`, `About TTGProtect`, false)
        .addField(`serverinfo`, `Info about the server`, false)
        .addField(`debug`, `Info about the Host and the bot`, false)
        .addField(`stats`, `View some statistics about TTGProtect`, false)
        .addField(`uptime`, `How long has the bot been up?`, false)
        .addField(`profile`, `About your user profile`, false)
        .setFooter(`You are not seeing all commands as you are not Staff in this server`)
        .setColor(0x157f87)
    
    msg.author.send(embed)
    msg.channel.send(`:mailbox: ${msg.author.username}, Check your DM's`)
    } else {
        const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setTitle(`__**HELP**__`)
        .addField(`ping`, `Ping the bot`, false)
        .addField(`about`, `About TTGProtect`, false)
        .addField(`serverinfo`, `Info about the server`, false)
        .addField(`stats`, `View some statistics about TTGProtect`, false)
        .addField(`debug`, `Info about the Host and the bot`, false)
        .addField(`uptime`, `How long has the bot been up?`, false)
        .addField(`profile`, `About your user profile`, false)
        .addField(`warn`, `Warn someone about something`, false)
        .addField(`kick`, `Kick the mentioned user`, false)
        .addField(`ban`, `Ban the mentioned user`, false)
        .addField(`embed`, `Make an embed to get yourself heard`)
        .setFooter(`You are viewing all commands`)
        .setColor(0x157f87)

        msg.author.send(embed)
        msg.channel.send(`:mailbox: ${msg.author.username}, Check your DM's`)
    }
}