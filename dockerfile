#using node of version 24.X
FROM node:24
#goes to app directory
WORKDIR /app

#installing angular
RUN npm install -g @angular/cli@22

COPY package*.json ./
RUN npm install

# copy it into the container
COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]