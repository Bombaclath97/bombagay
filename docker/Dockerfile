FROM node:latest

RUN mkdir -p /usr/src/bombagay
WORKDIR /usr/src/bombagay

COPY package.json /usr/src/bombagay
RUN npm i

COPY . /usr/src/bombagay

CMD [ "node", "index.js" ]