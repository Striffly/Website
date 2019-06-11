FROM node:latest

WORKDIR /home/

EXPOSE 8090

WORKDIR Website

COPY . .

CMD git pull && yarn install && yarn start
