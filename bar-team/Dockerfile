FROM node:13-alpine

WORKDIR /code
COPY package.json .
RUN npm install
COPY public .
copy src .

EXPOSE 3002

ENTRYPOINT ["npm", "start"]
