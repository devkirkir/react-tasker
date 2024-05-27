FROM node:21-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build:prod

FROM nginx:latest as prod

COPY --from=build /app/build /usr/share/nginx/html