const Discord = require("discord.js");
const config = require("../Configuration/config.json");
const { cmdFile, command } = require("../events/message.js");

module.exports = async(bot, msg, args) => {
    const code = args.join(" ");
    if(msg.author.id !== "357911279312306176") return;
    require('child_process').exec(code, function(err, stdout, stderr) {
        const embed = new Discord.RichEmbed()
            .setAuthor("Executing...", 'https://images-ext-1.discordapp.net/external/KbSEQVgLQF_D-Nc60PPGnl-0fmbNz9zESInP-QJQKKo/https/www.shopirvinespectrumcenter.com/images/spinner.gif')
            .setDescription("Please wait... If I stay like this, you might have crashed me!")
        return msg.channel.send(embed).then(function(m) {
            const embed2 = new Discord.RichEmbed()
                .setTitle("Exec Output")
                .setDescription("```" + stdout + "```")
                .setColor(0x00ff00)
            return m.edit(embed2);
        })
    })
}

/*
        const errorEmbed = new Discord.RichEmbed()
            .setTitle(":warning: Exec Error")
            .setDescription("```" + error + "```")
            .setColor(0xff0000)

        return msg.channel.send(errorEmbed);
*/