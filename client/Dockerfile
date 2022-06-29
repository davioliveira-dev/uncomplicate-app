FROM node:lts-alpine

RUN mkdir -p /src

COPY package.json src/package.json

WORKDIR /src

RUN npm install --force --silent

COPY . /src

RUN npm run build

RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]

CMD ["npm", "run", "preview"]

EXPOSE 3000
