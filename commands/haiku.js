const Canvas = require('canvas');
const Discord = require('discord.js')

module.exports = {
    name: 'haiku',
    description: 'Dedico un haiku a chi preferisci',
    execute(msg, args) {
        if (args.length === 0) {
            msg.channel.send('Non posso scrivere una poesia a nessuno. Tagga a chi devo dedicare questo haiku.');
        } else {
            haiku = `${
                firstFiveSyllVerse[Math.floor(Math.random() * firstFiveSyllVerse.length)]
            }\n${
                secondSevenSyllVerse[Math.floor(Math.random() * secondSevenSyllVerse.length)]
            }\n${
                thirdFiveSyllVerse[Math.floor(Math.random() * thirdFiveSyllVerse.length)]
            }`;
            msg.channel.send(`Ok, ${
                args[0]
            }, ecco la poesia a te dedicata.\n${haiku}\n\n\n-Bomba`);
            sendImage(msg, haiku);
        }
    }
}

const sendImage = async (msg, haiku) => {
    const canvas = Canvas.createCanvas(1280, 720);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage(`pictures/haiku/${
        Math.floor((Math.random() * 4) + 1)
    }.jpg`);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


    ctx.font = '90px serif';
    ctx.fillStyle = '#000000';
    ctx.fillText(`${haiku}`, 100, canvas.height - 600, 1000);

    ctx.font = '90px serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`${haiku}`, 100, canvas.height - 598, 1000);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'image.jpg');
    msg.channel.send('', attachment);
}

const firstFiveSyllVerse = [
    'Voci di pietra',
    'Lune in amor',
    'Sublime canto',
    'Niente dura',
    'Ora superba',
    'Ritornano qui',
    'Filo di lana',
    'Antiche mura',
    'Topo che sogna',
    'Biscia longeva',
    'Porta socchiusa',
    'Un alto picco',
    'Una cantante',
    'Il bue non canta',
    'Un pennello blu',
    'Macina ferma',
    'Tracce a penna',
    'Pulcino giallo',
    'Vecchio pittore',
    'Navi sul caldo',
    'Pronuncia strana',
    'Il cibo freddo',
    'Fanno la maglia',
    'Due vecchie zie',
    'Salto nel lago',
    'Grani di sole',
    'Guscio di perla',
    'Spiagge deserte',
    'La tua casa',
    'Acerba pera',
];

const secondSevenSyllVerse = [
    'Il cavallo non segue',
    'Si getta una rana',
    'Luce della candela',
    'Spighe di grano bianco',
    'Suona una sola voce',
    'Ambisce il frutteto',
    'Si colora una rosa',
    'Addomestica gatti',
    'Remi in lontananza',
    'Asso nella manica',
    'Impara a giocare',
    'Fulmine nel cielo blu',
    'Resta solo un sogno',
    'Si raccoglie il cervo',
    'Lucciole fanno festa',
    'Le pulci del poeta',
    'Acqua mista a more',
    'Riluttante una stella',
    'Acquista due matite',
    'Nel silenzioso quadro',
    'Il bruco rosicchiava',
    'La ciotola sporcata',
    'Ragazza che pescava',
    'Tuoni del pomeriggio',
    'Frasi dimenticate',
    'Crollava ieri notte',
    'Ciliegie arrossite',
    'Parenti profumati',
    'Il gatto inseguiva',
    'Farfalle vorticano',
];

const thirdFiveSyllVerse = [
    'Ancella morta',
    'Carta sgualcita',
    'Il nipote sa',
    'Brodo di ceci',
    'Disegni rotti',
    'Linee dolci',
    'Andare piano',
    'Veloce sarto',
    'La guarigione',
    'Pratiche api',
    'Non è risveglio',
    'Il vento cala',
    'Frasche di verde',
    'Siepi di bosso',
    'Sull\'altalena',
    'Finge un corvo',
    'Musiche brevi',
    'Calvo e sazio',
    'Piume nel cielo',
    'Sale il gatto',
    'Un canarino',
    'Fastidi, pieghe',
    'Corre il tempo',
    'Fradicia veste',
    'Il loro letto',
    'Un fiume di blu',
    'Un bimbo ride',
    'Essere stanco',
    'Gioia fugace',
    'Rossi cordini',
];
