FROM node:12.16.1

ENV HOME=/usr/src/app
WORKDIR $HOME

COPY package.json $HOME
COPY yarn.lock $HOME

RUN yarn install

VOLUME ["/usr/src/app"]

RUN rm -rf .config/
EXPOSE 9000
EXPOSE 8000
EXPOSE 6006
CMD ["npm", "run", "develop"]
