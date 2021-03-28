module.exports = {
    name: 'citazione',
    description: 'citazione a caso',
    execute(onlineUsers, msg, args) {
        if(args.length === 0) {
            msg.channel.send(`Come disse ${onlineUsers[Math.floor(Math.random() * onlineUsers.length)]}, \"${citazioni[Math.floor(Math.random() * citazioni.length)]}\"`);
        }
    }
}

const citazioni = [
    'se io sono ciò che è nei miei pantaloni, io sono cacca',
    'due cose sono infinite in questo universo: la stupidità umana ed il fetillo di mamm\'t',
    'quindi niente pompino di cittadinanza? Aggio capito, addios',
    'ste femmn ladr so comm o café: tutt puttan',
    'le femmine mi piacciono come mi piace la pizza: senza il cazzo di qualcuno sopra',
    'chiavare con un uomo è l\'unica cosa alfa che puoi fare, perché fare sesso con le femmine è da gay',
    'sì sono FELICE:\nForse\nÈ\niL caso di\nChiamare i carabinieri perché sono pazzo in culo\nE'
];