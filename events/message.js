const config = require(`../Configuration/config.json`);
const Discord = require(`discord.js`);

module.exports = async msg => {
    if(msg.author.id === config.fuckers && msg.content.startsWith(config.prefix)) return msg.channel.send(`:no_entry_sign: You're banned from using this bot you pleb`)
    if(!msg.content.startsWith(config.prefix)) return;
    if(msg.author.bot) return;
    const bot = msg.client;
    const args = msg.content.split(` `);
    const command = args.shift().slice(config.prefix.length);
    let cmdFile = require(`../Commands/${command}`);
    console.log(`[command-execute] The command ${command} has been executed by ${msg.author.tag} in ${msg.guild.name}`)
    if (!cmdFile) {
        return;
    }
    if (cmdFile) {
        cmdFile(bot, msg, args).catch(err => {
            const error = new Discord.RichEmbed()
                .setTitle(command)
                .setDescription(`Sorry about this!`)
                .addField(`Here's what returned`, "```" + err + "```", false)
                .setFooter(`Contact a developer to fix this`)
                .setColor(0xf45c42)

            msg.channel.send(error)

            console.error(`On execution of ` + command + `in ` + msg.guild.name + `, something went wrong: ` + err)
        });    
    }
};