FROM node:14.14.0

RUN mkdir /ior-front

WORKDIR /ior-front
COPY . /ior-front

RUN yarn install

EXPOSE 3000
CMD sh -c "yarn build && yarn start"
