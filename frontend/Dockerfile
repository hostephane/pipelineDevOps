# Étape 1 : Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Étape 2 : Serveur nginx
FROM nginx:alpine

# Copie le build dans le dossier nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Copie config nginx personnalisée si besoin
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
