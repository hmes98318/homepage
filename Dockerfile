FROM node:22.18.0-slim AS node_build

WORKDIR /app-build

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

############################################################

FROM nginx:stable-alpine-slim

COPY --from=node_build /app-build/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
