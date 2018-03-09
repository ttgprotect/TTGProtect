const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
    if(!config.maintainers.includes(msg.author.id)) return;
    const embed = new Discord.RichEmbed()
        .setAuthor('Restarting...', 'https://images-ext-1.discordapp.net/external/KbSEQVgLQF_D-Nc60PPGnl-0fmbNz9zESInP-QJQKKo/https/www.shopirvinespectrumcenter.com/images/spinner.gif')
        .setDescription(`I'll be back in a sec!`)
        .setColor(0xff0000)

    msg.channel.send(embed).then(function(m) {
        require('child_process').exec("pm2 restart TTGProtect", function() {
            bot.destroy();
            process.exit();
        });
        const embed2 = new Discord.RichEmbed()
            .setTitle('Done!')
            .setDescription(`I'm back!`)
            .setColor(0x00ff00)
            
        m.edit(embed2)
    })
}