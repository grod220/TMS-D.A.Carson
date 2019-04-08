FROM node

ENV NODE_ENV=production PORT=3000

COPY . /var/www
WORKDIR /var/www

RUN npm install
RUN npm run build

EXPOSE $PORT

ENTRYPOINT ["npm", "run", "start-server"]