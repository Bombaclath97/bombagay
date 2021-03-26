module.exports = {
    name: 'giorno',
    description: 'vediamo se ashura è sveglio :smirk:',
    execute(msg) {
        const date = new Date();
        let hours = date.getHours();
        console.log(hours);
        msg.channel.send((hours >= 14 || hours <= 7) ? 'eeeee so svegl o burdell sott i cas vostr' : 'è prest, torna alle 2');
    }
}