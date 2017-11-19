FROM node

WORKDIR /usr/share/app

COPY . .

RUN npm install && npm run build:dll

EXPOSE 3000

CMD ["npm", "start"]

