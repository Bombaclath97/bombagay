const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const bot = new Discord.Client();
let channelID = new Map();

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

const prefix = process.env.PREFIX + ' ';

bot.on('ready', () => {
    console.log('Started');
    bot.user.setActivity('Bombagay > Ashuragay');
});

bot.on('message', msg => {
    const userList = Array.from(bot.guilds.cache.get(msg.guild.id)
        .members.cache
        .filter(member => !member.user.bot)
        .values());
    if (!msg.author.bot && msg.content.startsWith(prefix) && (!channelID.has(msg.channel.guild.id) || channelID.get(msg.channel.guild.id) === msg.channel.id)) {
        const args = msg.content.slice(prefix.length).split(" ");
        const command = args.shift().toLowerCase();
        if (command === 'nudes') {
            bot.commands.get('nudes').execute(msg);
        } else if (command === 'citazione') {
            bot.commands.get('citazione').execute(userList, msg, args);
        } else if (command === 'complimenta') {
            bot.commands.get('complimenta').execute(msg, args);
        } else if (command === 'cockrating') {
            bot.commands.get('cockrating').execute(msg);
        } else if (command === 'pulisci') {
            bot.commands.get('pulisci').execute(msg);
        } else if (command === 'haiku') {
            msg.channel.send('Mmmmh, fammi pensare...');
            bot.commands.get('haiku').execute(msg, args);
        } else if (command === 'insulta') {
            bot.commands.get('insulta').execute(msg, args);
        } else if (command === 'scrivi') {
            let id = bot.commands.get('scrivi').execute(msg, args);
            if (id !== null) {
                channelID.set(msg.channel.guild.id, id);
            }
        }
    } else
        return;

});

bot.login(process.env.TOKEN);