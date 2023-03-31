# Specify base image
FROM node:alpine

# this line just be used to fix "idealTree already exists" error 
WORKDIR /usr/app

# copy from current folder to /usr/app in container
COPY ./ ./

# Install some dependencies
RUN npm install


# Default command
CMD ["npm", "start"]