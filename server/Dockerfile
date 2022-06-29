FROM node:lts-alpine

RUN mkdir -p /src

COPY package.json src/package.json

WORKDIR /src

RUN npm install --force --silent

COPY . /src

CMD ["npm", "start"]

EXPOSE 4000
