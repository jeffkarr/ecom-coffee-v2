FROM node:20-alpine

WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

EXPOSE 4100

# Serve the app
CMD ["npm", "start"]