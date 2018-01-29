FROM node

ADD . /code

WORKDIR /code

RUN npm install
RUN npm run setup

EXPOSE 5050

CMD [ "npm", "start" ]