FROM postgres:16.0-alpine

RUN apk add --update nodejs npm

COPY src /app/src/
COPY package.json /app/
COPY package-lock.json /app/
COPY tsconfig.json /app/
COPY .env /app/

WORKDIR /app

RUN npm install

CMD ["npm", "run", "dev"]