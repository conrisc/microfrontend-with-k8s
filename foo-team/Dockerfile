FROM node:13-alpine

WORKDIR /code
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]