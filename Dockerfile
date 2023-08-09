FROM node:18.15.0

RUN apt update
RUN npm install -g typescript typescript@latest nodemon

RUN mkdir /data/

WORKDIR /data/
COPY .  /data

RUN npm install
RUN npm run build
EXPOSE 8000

CMD ["node", "./dist/out/main.js"]
