FROM node:12-alpine

WORKDIR . /app

COPY package*.json ./

RUN npm install -g @adonisjs/cli

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
