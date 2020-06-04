FROM node:12.18.0

ENV HOME=/usr/src/app
WORKDIR $HOME

COPY package.json $HOME
COPY yarn.lock $HOME

VOLUME ["/usr/src/app"]

EXPOSE 8000
CMD ["sh"]
