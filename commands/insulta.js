module.exports = {
    name: 'insulta',
    description: 'Insulta qualcuno',
    execute(msg, args) {
        const insulto = insulti[Math.floor(Math.random() * insulti.length)];
        if (args.length === 0) {
            msg.reply(insulto);
        } else {
            msg.channel.send(`${
                args[0]
            } ${insulto}`);
        }
    }
}

const insulti = [
    'vorrei insultarti, ma vedo che madre natura ci ha già pensato al posto mio. Ed ha fatto un ottimo lavoro.',
    'come disse Albert Einstein, \'se sembra merda, puzza di merda, e sa di merda... probabilmente è una merda\'. L\'aspetto e il sapore ci sono. Non ho il coraggio di assaggiarti.',
    '? Dovreste chiamarlo "canestro da basket" per quante palle ha preso dentro.',
    'tutto sommato è come un bambino prima che nascesse: uno schizzo di sburno.',
    'è talmente una testa di cazzo che pensarci troppo rischia di farti diventare gay.',
    '🎵per fare il tavolo ci vuole il legno. 🎵Per fare il legno ci vuole l\'albero. 🎵Per fare te è bastato un preservativo difettoso.',
    'dovresti comprare una pompetta per clisteri, metterla nell\'orecchio e sperare che così spurghi la merda che hai nel cranio.',
    'ha un solo neurone nel cervello. Il cazzo è che si muove pure assai, e si è rincoglionito a tozzare sul cranio.',
    'è il vincitore di quest\'anno del concorso Miss Tai Rompendo Le Palle.',
    'dovrebbe vincere il premio Nobel per la pace. Grazie a lui, la fame nel mondo non sembra così brutta.',
    'mi passi una foto? Facevo il presepe e ho perso il buco del culo dell\'asino'
]
