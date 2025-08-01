FROM node:22.17.1

WORKDIR /app
COPY . .
COPY .env.example .env

RUN npm install

EXPOSE 3000
CMD ["node", "server.js"]
