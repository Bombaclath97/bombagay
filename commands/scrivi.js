module.exports = {
    name: 'scrivi',
    description: 'lega il bot a un canale preciso',
    execute(msg, args) {
        if (args.length === 0 || args[0] !== 'qui') {
            msg.channel.send(`Il comando è pericoloso, e lo sto facendo un po' a cazzo di cane. Se sei sicuro di usarlo, scrivi "Bomba scrivi qui".`);
            return null;
        } else {
            msg.channel.send(`Ok paparino ;)`);
            return msg.channel.id;
        }
    }
}