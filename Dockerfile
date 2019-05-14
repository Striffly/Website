FROM node:latest

COPY . /home/Website
WORKDIR /home/Website

EXPOSE 8090
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn install
CMD yarn start