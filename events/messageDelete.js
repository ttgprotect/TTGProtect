const config = require("../Configuration/config.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = async (msg, oldmsg) => {
    const logchannelFind = msg.guild.channels.find(`name`, `logs`)
    logchannelFind.send("Message Deleted: ```" + msg + "```")
    if(!logchannelFind) {
        return;
    }
}