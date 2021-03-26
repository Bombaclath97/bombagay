const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const bot = new Discord.Client();

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

const prefix = process.env.PREFIX;

bot.on('ready', () => {
    bot.user.setActivity('Ashurahelp');
});

bot.on('message', msg => {
    if (!msg.author.bot && msg.content.startsWith(prefix)) {
        const args = msg.content.slice(prefix.length).split(" ");
        const command = args.shift().toLowerCase();

        if (command === 'gay') {
            bot.commands.get('gay').execute(msg, args);
        } else if (command === 'help') {
            bot.commands.get('help').execute(msg);
        } else if (command === 'giorno') {
            bot.commands.get('giorno').execute(msg);
        } else if (command === 'insulta') {
            bot.commands.get('insulta').execute(msg, args);
        }
    } else return;
});

bot.login(process.env.TOKEN);