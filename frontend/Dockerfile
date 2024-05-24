# Use a imagem Node.js como base
FROM node:16

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código do projeto
COPY . .

# Construa a aplicação para produção
RUN npm run build

# Instale 'serve' globalmente para servir os arquivos estáticos
RUN npm install -g serve

# Exponha a porta que o servidor irá escutar
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["serve", "-s", "dist"]
