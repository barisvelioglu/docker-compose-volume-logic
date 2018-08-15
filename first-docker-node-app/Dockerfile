FROM node:8.9-alpine

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g nodemon

COPY package.json /app/package.json
RUN npm install && npm ls && npm cache clean --force && mv /app/node_modules /node_modules

COPY . /app

ENV PORT 3000
EXPOSE 3000

CMD ["node", "app.js"]
