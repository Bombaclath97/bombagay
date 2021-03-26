module.exports = {
    name: 'gay',
    description: 'chiedi ad ashura di fare qualcosa',
    execute(msg, args) {
        if (args.length < 1) {
            msg.reply(badAnswers[Math.floor(Math.random() * 3)]);
        } else {
            switch (args[0]) {
                case 'pls':
                    msg.channel.send(goodAnswers[Math.floor(Math.random() * 3)]);
                    break;
                case 'skarner':
                    msg.channel.send('NIII NOOO NIII NOOO NIII NOOO BUCCHINARA', {
                        tts: true
                    });
                    break;
                case 'cringe':
                    msg.channel.send('so tropp frisk e capit https://www.instagram.com/antoniospasu/', {
                        files: [`./pictures/${Math.floor((Math.random() * 5) + 1)}.png`]
                    });
            }
        }
    }
}
const badAnswers = ['che ce nun m romp u cazz', 'ooooooooooo ma mbarat a scrivrrrr', 'te sta zitt e fo cess', 'o burdell sott e cas vostr'];
const goodAnswers = ['vabbuono E INVECE NO LELELELE T\'AGG FATT', 'no ja nun m n ten', 'e capit c song tropp fort allo xd', `fatt aiuta da sort xd`];