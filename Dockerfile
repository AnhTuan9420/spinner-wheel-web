# Build stage
FROM node:18-alpine AS build
WORKDIR /usr/src/minigame
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

# Production stage
FROM nginx:1.16.0-alpine
WORKDIR /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./default.conf /etc/nginx/conf.d
COPY --from=build /usr/src/minigame/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
