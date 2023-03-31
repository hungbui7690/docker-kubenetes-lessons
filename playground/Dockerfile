# Specify base image
FROM node:alpine

# this line just be used to fix "idealTree already exists" error 
WORKDIR /usr/app

# copy from current folder to /usr/app in container
COPY ./package.json ./
RUN npm install
COPY ./ ./


# Default command
CMD ["npm", "start"]