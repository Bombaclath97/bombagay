module.exports = {
    name: 'complimenta',
    description: 'manda un complimento a qualcuno ;)',
    execute(msg, args) {
        msg.channel.send((args.length > 0) ? `${args}, ${
            complimenti[Math.floor(Math.random() * complimenti.length)]
        }` : `${
            ragazza[Math.floor(Math.random() * ragazza.length)]
        }? La ragazza che sta leggendo questo post.`);
    }
}

const complimenti = ['ma che pene magnifico che hai. Davvero bello, ed hai delle palle delle dimensioni perfette, che lasciano intendere quanto siano piene di mascolinità.', 'sapevi che in nessun luogo dove mi son trovato in vita mia ho visto qualcuno con delle orecchie così magnifiche? Sembrano uscite da un fantasy di orecchie.', 'è per caso il padre dei miei bambini con il quale sto parlando? No? Non ancora...', 'se la tua sburma fosse dolce la metà di quanto sei dolce tu, ne vorrei almeno 10l 😋']

const ragazza = ['Sapevate chi è davvero speciale, divertente, succosa e con le dita dei piedi più gustose', 'Non dovrei dirlo, però nel mondo qualcuno ha preso una multa per eccesso di bellezza e pompino in corsia di sorpasso. Sapevate chi', 'Porco Dio']
