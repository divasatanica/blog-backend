FROM node:10.15-alpine
COPY . /app
WORKDIR /app
RUN npx yarn install --registry=https://registry.npm.taobao.org
EXPOSE 8080
CMD ["npm", "start"]
