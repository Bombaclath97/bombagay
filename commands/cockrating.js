const Canvas = require('canvas');
const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'cockrating',
    description: 'Sei insicuro? Hai bisogno di sicurezza in te stesso? Fatti fare un cockrating ufficiale dalla nostra giuria di giudica peni',
    execute(msg) {
        const giudice = nomi[Math.floor(Math.random() * nomi.length)];
        const pic = giudici[giudice];
        msg.channel.send(messaggio(msg.author, giudice));
        sendImage(msg, giudici[giudice], voto + 4);
    }
}

var voto;

const messaggio = (autore, giudice) => {
    return `D'accordo, ${autore}, lascia che ti presenti il giudice di oggi: **${giudice}**!\n` + introduzione(autore, giudice) + tronco(autore, giudice) + capocchia(autore, giudice) + review(autore, giudice);
};

const introduzione = (autore, giudice) => {
    const intro = {
        'Luca Abete': `POPOLO DI STRISCIA! Sono qui a Marano di Napoli perché oggi ci hanno chiesto di fare il cosiddetto cockrating di ${autore}! Cominciamo, tiri fuori questo pene! `,
        'Ezio Greggio': `Sono Ezio Greggio, è sempre bello cominciare in una certa... MANIEEERA! Oggi in questa nuova puntata di Striscia la Penizia faremo un altro magnifico COCKRATING! E quindi facciamo entrare il nostro ospite. È lui, o non è lui? Certo che è lui! ${autore}, e in particolare il suo pene. `,
        'Antonio \"Black\" Dello Stretto': `Maronn ma che schif i cazz. Lo devo fare che m'aggia accattà a switch, ja. E vabbuo, spero che mi fai ricredere. Famm vrè stu pesc, ${autore}. `,
        'Dodo dell\'Albero Azzurro': `Bambini! Che giornata speciale! Sembra proprio che ci tocchi osservare un nuovo tipo di animaletto tutti insieme. Sto parlando ovviamente del pene di ${autore}, che ohibò ma è già qui con noi nel pene azzurro! Guardiamolo tutti insieme! `
    };
    voto = 0;
    return intro[giudice];
};

const tronco = (autore, giudice) => {
    const tronco = {
        'Luca Abete': [
            'Accipicchia, ma è un pene davvero, come dire, particolare. Assolutamente non orribile, ma decisamente non per tutti. La presenza di così tante vene potrebbe disturbare, così come eccitare il partner. ',
            'Oooooh, che bellezza! Una lunghezza devo dire per nulla carente! Mi ricorda un po\' l\'albero dal quale sono caduto! Hahahaha! Devo dire che può intimidire per il diametro, ma tutto sommato non è per nulla da buttare. ',
            'MA SIGNORI! Ma ciò che si palesa davanti ai miei occhi ed i vostri schermi nient\'altro è che un semplice capolavoro! Mi farei picchiare ogni giorno da questo pene dalle dimensioni e proporzioni da manuale! '
        ],
        'Ezio Greggio': [
            'Ma signori di Striscia, ma si può fare? Ma cosa, ma chi, ma come è stato creato un... come dire... obrobrio così? Lunghezza? Carente. Non soddisferebbe nemmeno una velina con queste proporzioni. È una vergoooonia. ',
            'Sarà vero? Sarà falso? Sarah Ferguson? Questo pene è davvero ben fatto! Pecca di ~~denaro~~ lunghezza, ma si salva in larghezza. Siamo sulla buona strada per un pene davvero stupefacente. ',
            'E su e giù e tric e trac! Abbiamo forse trovato il pene più bello dopo quello del CAVALIEEEEEERE? Mi sbilancio signori, lo faccio! È meglio di quello del presidente Berlusconi! Non ha pecche, una venatura superba, dimensioni perfette. '
        ],
        'Antonio \"Black\" Dello Stretto': [
            'AAAAAAAAAAA HA HA HA! MA TUTT\'APPOST? AAAAAAAAAAAAAAAHAHAHAHA! Ma com\'è piccolo! Comm t\'o pigl mman? Ma ti fai u crack? E soprattutto, ma quante vene tiene? Par Hulk sotto steroidi xd. ',
            'Eh... Allora, SINCERO, ho visto di meglio. Cioè, ci sta, eh. Però non è tutto sto gran pesce. Le dimensioni per carità so buone, sia in lungo che in largo, ma obbiettivamente puoi trovare di meglio. Vabbé comunque bene così! ',
            'A facc ro cazz! Cioè, volevo dire, bel pene. Peggio del mio ovviamente eh. Un po\' più grande? Certo. Un po\' più largo? Sicuramente. Un po\' più bello? Dipende da chi chiedi. Mo però nun t\'atteggià eh. '
        ],
        'Dodo dell\'Albero Azzurro': [
            'Ordunque, vuoi tirarlo fuori? Ah, già fatto? Mmmmmmmh... Non ci siamo bambini. Osservate, se ci riuscite, le tristi dimensioni di questo verme pompante di sangue. Esatto, sono praticamente inesistenti. La parola del giorno è... INESISTENTI! ',
            'Uuuuurca, ma che bel pene che abbiamo oggi qui al pene azzurro! Davvero, ottime dimensioni! Purtroppo tutte queste venature qui alla RAI (Rating Asmr Ipeni) non possiamo dare il cattivo messaggio che avere tutte queste venature sia corretto. Non lo è! Però per il resto, complimenti! ',
            'Ma... Ma... Bambini, ce l\'abbiamo fatta! Abbiamo trovato il pene più bello di tutta la foresta di peni del pene azzurro! Ma è spettacolare! UAAAAAU! Semmai doveste trovare un pene così in mezzo alla strada, con queste dimensioni perfette, e queste venature che sembrano disegnate, affrettatevi e prendetelo! '
        ]
    };
    let temp = Math.floor(Math.random() * tronco[giudice].length);
    voto += temp + 1;
    return tronco[giudice][temp];
};

const capocchia = (autore, giudice) => {
    const capocchia = {
        'Luca Abete': [
            'Ma SIGNORI! MA QUESTA È UNA VERGOGNA! Ma che spreco di denaro! Ma questa non è una capocchia, è una tristezza! Immagina lo schizzo di sbrumo quando esce come sembra! Non va per nulla bene! È un pericolo per sé e chi gli sta intorno! ',
            'Accipicchia! La capocchia non è per nulla male! Se non fossi io un cosidetto "eterosessuale" potrei addirittura assaggiarlo! Ma sì, facciamolo! *slurp* Ah, pecca di sapore, un po\' pungente, non per tutti. ',
            'Avvicinati con la camera, prendi bene in primo piano questa capocchia. Ora, sono sicuro che i signori a casa concordino con me se dico che questa capocchia è letteralmente la punta di diamante di questo pene! Complimenti a chi lo prende! '
        ],
        'Ezio Greggio': [
            'HAH! E questa è una capocchia? Più che una capocchia, uno stressssss! Ma mi dica, mi faccia sapere, ma lei, proprio lei, non si vergogna a palesare il pene se con una capocchia così peccata? È, per mancanza di altri termini, signori di Striscia, brutta! ',
            'Che capocchia! Niente male, ospite di oggi! In questo magnifico paese di sicuro c\'è di meglio, stiamo parlando di una capocchia sicuramente nella media, se non leggermente al di sopra. Le stringo la mano, l\'altra mano, e di nuovo questa mano qua. ',
            'Colleghi dalla regia, ma siete bravissimi a cercare ospiti! Non ho mai visto un pene coronato da una capocchia così perfetta! È il sogno di milioooooni di italiane, e l\'invidia del resto degli italiani, io compreso! '
        ],
        'Antonio \"Black\" Dello Stretto': [
            'Che schif mannagg a mamm\'t. Ma hai bucat? Che capocchia brutta, tutta sgonfia, aaaaa che schif. No ja mettilo via che mo vuommc 🤮. Ij m vergognass, jett\'t sott \'nu pont xd. ',
            'E sì ja, bella capocchia. Onesto, una volta su 4chan ne ho vista una molto simile. U saj c\'re? Non mi piace il frenulo. Non tanto come si attacca, che comunque non è colpa tua, ma più che altro quanto è rosso. Vabbuo e capit, vafammocc. ',
            'Ngul che capocchia! Magnifica! No, ma non sto scherzando, eh. Che. Capocchia. Davvero ben fatta! Mo, m\'arraccumann, tieni una bella capocchia e ci sta, ma comm t\'attigg \'nu poc t vatt mannagg gesù crist. '
        ],
        'Dodo dell\'Albero Azzurro': [
            'Bambini, che sporcizia! Prendete spugne, sapone e tante buone intenzioni e togliamo di mezzo questa macchia rossa da questo pene! Come? Non è una macchia rossa? È una capocchia? Ah... E allora bambini, posate le attrezzature per pulire e preparate quelle per il cockshaming! ',
            'Planiamo bambini! Eccola qua, questa è una capocchia. Le capocchie belle sono proprio così, notate il fatto che non sfiguri con il tronco del pene. Né troppo grande, né troppo piccola. Il colore è rossaceo, ma non rosso scuro. Ben fatto, ma possiamo trovare di meglio. ',
            'Toh, non pensavo nascondessi questa capocchia sotto quel prepuzio. Ma esiste davvero secondo voi, bambini, una capocchia così bella? Secondo me, il vostro amico Dodo, sì! Ed è una fortuna che davvero esista, per poter dare un buon esempio al mondo. '
        ]
    }
    let temp = Math.floor(Math.random() * capocchia[giudice].length);
    voto += temp + 1;
    return capocchia[giudice][temp];
};

const review = (autore, giudice) => {
    const review = {
        'Luca Abete': `Alla luce di tutto, popolo di Striscia, decido di votare il pene di ${autore}: **${voto + 4} SU 10!**`,
        'Ezio Greggio': `Si'oooori, è l'ora di assegnare a questo, codesto, quello pene, in possesso di ${autore} il voto di... **${voto + 4} SU 10!**`,
        'Antonio \"Black\" Dello Stretto': `Appo, mi sento pronto a fare la mia recensione. Io, Tonino Black detto Black, voto il pene di ${autore}... **${voto + 4} SU 10!**`,
        'Dodo dell\'Albero Azzurro': `Bambini, chiudiamo il televoto e grazie per avermi pagato la droga. Yeeeeeeee. Il risultato è, i bambini a casa votano il pene di ${autore}... **${voto + 4} SU 10!**`
    };
    return review[giudice];
}

const sendImage = async(msg, image, voto) => {
    const canvas = Canvas.createCanvas(1280, 720);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage(`${image}`);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = '64px sans-serif';
    ctx.fillStyle = '#000000';
    ctx.fillText(`${voto}/10`, 100, canvas.height - 100);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'image.jpg');
    msg.channel.send('', attachment);
}

const giudici = {
    'Luca Abete': 'pictures/lucaabete.jfif',
    'Ezio Greggio': 'pictures/eziogreggio.jpg',
    'Antonio \"Black\" Dello Stretto': 'pictures/black.jpg',
    'Dodo dell\'Albero Azzurro': 'pictures/dodo.jfif'
};

const nomi = [
    'Luca Abete',
    'Ezio Greggio',
    'Antonio \"Black\" Dello Stretto',
    'Dodo dell\'Albero Azzurro'
];