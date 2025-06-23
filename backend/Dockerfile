# Utilise une image officielle Node.js comme base
FROM node:20-alpine

# Crée un répertoire de travail
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm ci --omit=dev

# Copie le reste du code source
COPY . .

# Spécifie la variable d'environnement par défaut
ENV NODE_ENV=production

# Expose le port (adapter si nécessaire)
EXPOSE 3001

# Commande de démarrage
CMD ["node", "src/app.js"]
