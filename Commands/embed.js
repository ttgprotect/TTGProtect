const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
    if(!msg.member.roles.some(r=>["Staff"].includes(r.name)) )
    return msg.channel.send({embed: {
        description: `:no_enrty_sign: ${msg.author.username}, you don't have the permission to run this command!`,
        color: 0xff00,
        footer: `Contact your server admin if you think this is wrong`        
    }
    });

    var message = args.slice(1).join(" ");
    msg.delete();
    msg.channel.send({ embed: {
        description: `${message}`,
        color: 0x194596
    }});
};