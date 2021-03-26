module.exports = {
    name: 'insulta',
    description: 'lasciati trasportare dagli insulti di ashura',
    execute(msg, args) {
        msg.channel.send(`${args[0]}${insulti[Math.floor(Math.random() * 4)]}`)
    }
}
const insulti = [
    ' nun m\'arricurdav c foss accussi brutt xd',
    ' nda granda bucchin i mammt',
    ' CE RUTT U CAZZ',
    ' si comm nu black che juoc a lol, SCAAAARS xd',
    ' bucchiiiiiiiiiiiiiiiiiiiiiin'
];