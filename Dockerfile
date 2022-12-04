# Stage 1: Build react app first
FROM node:14.21.0-slim AS build
WORKDIR /app
#sadsadsad
ENV PATH /app/node_modules/.bin:$PATH
RUN npm cache clean -f && npm install sudo n stable

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Build the final image and copy the react build files
FROM nginx:1.17.8-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]