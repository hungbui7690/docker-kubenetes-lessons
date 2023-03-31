# build phase => create /app/build
FROM node:16-alpine as builder
WORKDIR '/app'
COPY ./package.json .
RUN npm install 
COPY . .
RUN npm run build 

# nginx phase
FROM nginx
# copy from builder phase > use --from
COPY --from=builder /app/build usr/share/ningx/html
