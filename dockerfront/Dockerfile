# 1. Imagen base
FROM node:20-alpine

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar package.json y package-lock.json primero
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del código
COPY . .

# 6. Construir la app para producción
RUN npm run build

# 7. Exponer el puerto en el contenedor
EXPOSE 3000

# 8. Comando por defecto para correr la app
CMD ["npm", "start"]
