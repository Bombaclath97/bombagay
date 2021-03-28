module.exports = {
    name: 'pulisci',
    description: 'cancella tutti i messaggi del bot nel canale',
    execute(msg) {
        msg.channel.messages.fetch().then(messages => {
            const botMsg = messages.filter(message => message.author.bot);
            msg.channel.bulkDelete(botMsg);
            msg.channel.send('Appo, ho pulito un po\' di merda. Ringraziami dopo ❤️');
        }).catch(err => {
            console.error(err);
        });
    }
}