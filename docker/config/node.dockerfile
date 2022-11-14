FROM node:16
WORKDIR /home
COPY ./package.json /home/
RUN npm install
WORKDIR /var/www/html