FROM node:16

# create app dir
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

RUN npm ci --only=production

COPY . .

EXPOSE 4000
CMD [ "node", "dist/index.js"]