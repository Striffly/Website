FROM node:latest

WORKDIR /home/

EXPOSE 8090

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN git clone https://github.com/epicare2021/Website.git

WORKDIR Website

RUN yarn install
CMD git pull && yarn start
