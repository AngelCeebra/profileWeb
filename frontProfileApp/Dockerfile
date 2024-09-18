FROM node:20
WORKDIR /app
RUN npm install -g npm@latest
COPY package*.json ./
RUN npm install
COPY ./ /app
RUN npm install -g @angular/cli
CMD ["ng", "serve", "--host", "0.0.0.0"]