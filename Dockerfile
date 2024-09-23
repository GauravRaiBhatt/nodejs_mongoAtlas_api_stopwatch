From node:alpine3.19
WORKDIR /app
COPY package.json ./
RUN npm i
COPY . .
EXPOSE 8000
CMD [ "npm", "run", "start" ]