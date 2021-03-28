module.exports = {
    name: 'nudes',
    description: 'manda dei nudes in ASCII',
    execute(msg) {
        msg.channel.send(`Ecco a te, sporcaccione ;D\n${nudes[Math.floor(Math.random() * (nudes.length - 1))]}`)
    }
}
const nudes = ['8=====D\nUN SUCCOSO PESCE PIENO DI SBURNO',
    '(. Y .)\nUN PARO DI ZIZZE PIENE DI LATTE',
    '(_(_|\n|_|_|\nUN BEL CULO PIENO DI FETILLO',
    '>o<\nUN BEL FETILLO PIENO DI CACCO'
];