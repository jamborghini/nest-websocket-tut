FROM node:lts-alpine AS temp

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY src ./src
COPY tsconfig*.json ./

RUN npm run build

CMD ["npm", "run", "start:prod"]
