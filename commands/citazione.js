module.exports = {
  name: "citazione",
  description: "citazione a caso",
  execute(onlineUsers, msg, args) {
    if (args.length === 0) {
      const username =
        onlineUsers[Math.floor(Math.random() * onlineUsers.length)].user
          .username;
      getCitazione(username)
        .then((result) => msg.channel.send(`${result.citazione}`))
        .catch((reason) => console.log(reason));
      console.log(result);
    }
  },
};

const getCitazione = async (username) => {
  const response = await fetch(
    `http://${process.env.BACKEND_URL}/citazione?username=${username}`
  );
  const json = await response.json();
  return json;
};
