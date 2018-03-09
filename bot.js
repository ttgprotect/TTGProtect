const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./Configuration/config.json");

bot.login(config.token);

require("./util/eventLoader.js")(bot);

bot.on("ready", function() {
    console.log(`[info] Started the best Discord bot! Running...`)
    console.log(`[info] Connected to Discord as: ${bot.user.tag} with the id: ${bot.user.id}! Prefix: ${config.prefix}, branch: ${config.branch}, version: ${config.version}`)
    require('child_process').exec('cd dashboard && node WebServer.js', () => {
        
    })
}) // Jeff was here

bot.on("guildCreate", function(guild) {
    console.log(`[guildCreate, info] I was just added to ${guild.name}`)
    const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .addField(`:wave: Welcome!`, `Thanks for adding TTGProtect to your server! You might be wondering, how do I setup TTGProtect? Well, I'll show you.`)
        .addField(`Getting Started`, `To get started, make sure you create a role called "Staff". This role will enable you moderation features such as kick/ban etc. Next, you might want to give this role to other staff members who will be able to take moderation features!`)
        .addField(`Anything Else?`, `If there is, you can always join the support server or DM a Developer. Developers you can message include ` + "`Ken#4234, haydenbrown39#3169`" + `. The support server should be in the ` + "`about`" + ` command`)
        .setColor(0x00ff00)
        .setFooter(`Thanks for adding ${bot.user.username}, I wish you luck!`)
    
    guild.owner.send(embed)
})