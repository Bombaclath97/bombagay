module.exports = {
    name: 'citazione',
    description: 'citazione a caso',
    execute(onlineUsers, msg, args) {
        if (args.length === 0) {
            const username = onlineUsers[Math.floor(Math.random() * onlineUsers.length)].user.username
            const result = getCitazione(username)
            msg.channel.send(`${result.citazione}`)
        }
    }
}

const getCitazione = async (username) => {
    const response = await fetch(`http://${process.env.BACKEND_URL}/citazione?username=${username}`)
    const json = await response.json()
    console.log(json)
    return json
}
