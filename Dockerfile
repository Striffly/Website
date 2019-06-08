FROM node:latest

WORKDIR /home/

EXPOSE 8090

WORKDIR Website

COPY . .

CMD yarn install && yarn start
