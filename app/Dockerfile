FROM node:12.16.1 AS build-stage

RUN npm i -g @nestjs/cli ts-node

COPY . /app

WORKDIR /app
RUN yarn
RUN yarn build

CMD ["/bin/bash", "-c", "yarn start"]

FROM node:12.16.1 AS runtime-stage

WORKDIR /app

COPY --from=build-stage /app/package.json ./
COPY --from=build-stage /app/yarn.lock ./

RUN yarn install --production

COPY --from=build-stage /app/dist ./dist

CMD ["/bin/bash", "-c", "node /app/dist/main"]
