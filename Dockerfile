# Install dependencies
FROM node:current-alpine AS base
WORKDIR /base
COPY package*.json ./
RUN yarn install --production
COPY . .

# Package/Compiler production build
FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN yarn run build

# Source build w/ artifacts, expose, and run
FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN yarn add next

EXPOSE 80
CMD ["yarn", "start"]