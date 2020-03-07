FROM node:12.16.1

ENV HOME=/usr/src/app
WORKDIR $HOME

COPY package.json $HOME
COPY yarn.lock $HOME

RUN yarn install && rm -rf .npm/

VOLUME ["/usr/src/app"]

RUN rm -rf .config/
EXPOSE 9000
EXPOSE 8000
CMD ["npm", "run", "develop"]
