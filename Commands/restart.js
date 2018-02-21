const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
    if(!config.maintainers.includes(msg.author.id)) return;
    require('child_process').exec("pm2 restart TTGProtect", function() {
        bot.destroy();
        process.exit();
      });
    msg.channel.send(`Restarted TTGProtect!`)
}