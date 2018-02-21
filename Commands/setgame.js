const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
    let game = args.join(" ");

    // EMBEDS
    const noPerms = new Discord.RichEmbed()
         .setAuthor(bot.user.username, bot.user.avatarURL)
         .setDescription(`:no_entry_sign: ${msg.author.username}, you don't have the pemission to run this command`)
         .setColor(0xff0000)
         .setFooter(`Contact a developer if you belive this isn't right`)

    const missingArgument_game = new Discord.RichEmbed()
         .setTitle(`Oops! :scream:`)
         .setDescription(`You're a missing a required argument (game) in your message. The command can't continue without this, please add it and try again`)
         .setColor(0xff0000)
         .setFooter(`Contact a developer if you belive this is a mistake and the argument was entered`)
    // END OF EMBEDS
        
    if(!config.maintainers.includes(msg.author.id)) return msg.channel.send(noPerms)
    if(game.size < 1) return msg.channel.send(missingArgument_game)
    bot.user.setActivity(game)
}