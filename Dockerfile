FROM node:12.16.2-alpine3.9
WORKDIR /app
COPY . /app
RUN npm run tsc
CMD npm run builded