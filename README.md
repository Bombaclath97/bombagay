# BombaGay

Il bot di oggi per gli shitposter di domani. Punte di diamanete:

1. `Bomba haiku Username`: Manda un haiku a qualcuno. Il bot creerà anche un'immagine ispirante da mandare a tua madre come buongiornissimo.
2. `Bomba cockrating`: Un membro della giuria del cockrating farà il cockrating a te. Da implementare: rating dei testicoli. Il giudice ti darà una sua foto con il voto da poter appendere in camera.

## SelfHost

Per far partire il bot, devi avere installato NodeJS e npm sul sistema.

### Clona il bot e installa le dependencies

Il bot necessita di: discord.js, canvas, fs, dotenv e Docker per poter essere deployato con semplicità

```shell
> git clone https://github.com/Bombaclath97/bombagay.git
> cd bombagay
> touch .env
> nano .env #Crea una variabile PREFIX per il prefisso e una variabile TOKEN per il token
> docker build -t bombagay .
```

### Runna il bot

Per runnare il bot:

```shell
> docker run -d bombagay
```

## DISCLAIMER

Questo bot ovviamente non va preso sul serio, e gradirei se nessuno al mondo scoprirà questo. Detto questo lascio la repo Pubblica perché amo il pericolo.
