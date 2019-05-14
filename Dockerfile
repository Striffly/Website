FROM node:latest

COPY . /home/Website
WORKDIR /home/Website

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn install -g serve
RUN serve -s build -l $SERVER_PORT