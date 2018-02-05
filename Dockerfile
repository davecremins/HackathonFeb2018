FROM node

ADD . /code

WORKDIR /code

RUN npm install
RUN npm run setup

EXPOSE 3000

CMD [ "npm", "start" ]
