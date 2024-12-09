# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos del proyecto al contenedor
COPY package*.json ./
RUN npm install
COPY . .

# Expone el puerto 4000
EXPOSE 4000

# Ejecuta la aplicación
CMD ["node", "index.js"]