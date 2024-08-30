FROM node:20-alpine

WORKDIR /usr/src/app

ENV DB_URL="postgresql://postgres:postgres@ecomm_db:5432/postgres"

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 4100

CMD ["npm", "start"]
