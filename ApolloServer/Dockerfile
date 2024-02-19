FROM node:latest
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 4000

CMD [ "npm", "start" ]
