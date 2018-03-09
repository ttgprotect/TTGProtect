const Discord = require("discord.js");
const config = require("../Configuration/config.json");
const { cmdFile, command } = require("../events/message.js");

module.exports = async(bot, msg, args) => {
    const code = args.join(" ");
    if (msg.content.startsWith(config.prefix + "eval")) {
        const noPerms = new Discord.RichEmbed()
         .setAuthor(bot.user.username, bot.user.avatarURL)
         .setDescription(`:no_entry_sign: ${msg.author.username}, you don't have the pemission to run this command`)
         .setColor(0xff0000)
         .setFooter(`Contact a developer if you belive this isn't right`)

        if(!config.maintainers.includes(msg.author.id)) return msg.channel.send(noPerms)
        if(msg.content.includes(`bot.token`)) {
          const no = new Discord.RichEmbed()
            .setImage(`https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif`)
            .setColor(0xffa500)
          return msg.channel.send(no);
        }
        if(msg.content.includes(`config.token`)) {
          const no = new Discord.RichEmbed()
            .setImage(`https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif`)
            .setColor(0xffa500)
          return msg.channel.send(no);
        }
        if(code === `config`) {
          const no = new Discord.RichEmbed()
            .setImage(`https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif`)
            .setColor(0xffa500)
          return msg.channel.send(no);
        }
        if(code.length === 0) {
          return msg.channel.send("Gimme something to work with!");
        }
        try {
          let evaled = eval(code);
    
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
    
          const resultEmbed = new Discord.RichEmbed()
            .setDescription("```" + evaled + "```")
            .setColor(0x00ff00)
          
          msg.channel.send(resultEmbed)
        } catch (err) {
          const embed = new Discord.RichEmbed()
            .setDescription(`\`\`\`js\n${err.stack}\`\`\``)
            .setColor(0xff0000)

          msg.channel.send(embed);
        }
      }
}