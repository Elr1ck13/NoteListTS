
FROM node:18-alpine AS base


WORKDIR /app


RUN apk add --no-cache bash git python3 make g++


RUN mkdir -p /app/node_modules && chown -R node:node /app


COPY --chown=node:node package.json package-lock.json* ./


USER node


RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi


COPY --chown=node:node src ./src
COPY --chown=node:node public ./public
COPY --chown=node:node tsconfig.json ./


EXPOSE 3000


CMD ["npm", "start"]
