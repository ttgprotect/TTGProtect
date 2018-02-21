const config = require("../Configuration/config.json");
const Discord = require("discord.js")

module.exports = async(bot, msg, args) => {
    msg.channel.send(`Please Wait...`).then(function(m) {
        m.edit(`**Ping Time:** ${m.createdTimestamp - msg.createdTimestamp}ms
        **Commands Loaded:** 15/15 (None Missing)
        **OS:** Windows Server 2008 R2
        **RAM:** 4GB
        **Web Dashboard:** Offline
        `)
    })
}