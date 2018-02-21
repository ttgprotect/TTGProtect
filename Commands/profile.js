const discord = require('discord.js');

module.exports = async(bot, msg, args) => {
    user = msg.author;

    if (msg.mentions.users.size > 1) { return msg.reply("Cannot get userinfo of multiple users."); }
    else if (msg.mentions.users.size > 0) { user = msg.mentions.users.array()[0]; }

    gamename = "No Game"; gamestream = "Not Streaming";
    if (user.presence.game) {
        gamename = user.presence.game.name;
        gamestream = user.presence.game.streaming;
    }

    let embed = new discord.RichEmbed()
        .setTitle(`${user.username}'s Profile`)
        .setDescription(`Seem's pretty noice`)
        .setColor(0x157f87)
        .setThumbnail(user.avatarURL)
        .addField(":id: ID", user.id, true)
        .addField("Tag", user.tag, true)
        .addField(":clock9: Created", `${user.createdAt}`, true)
        .addField(":robot: Is Bot?", user.bot, true)
        .addField(":video_game: Game", "**Name:** " + gamename + "\n**Streaming:** " + gamestream, true)
        .addField("Status", user.presence.status, true);

    msg.channel.send(embed);
}