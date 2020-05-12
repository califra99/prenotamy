FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @adonisjs/cli nodemon

RUN npm install

COPY . .

EXPOSE 8080

USER node

CMD ["nodemon", "-L", "server.js"]
