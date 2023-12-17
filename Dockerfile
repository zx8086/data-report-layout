# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:latest as build
WORKDIR /app

COPY package*.json bun.lockb  ./
RUN rm -rf node_modules
RUN rm -rf build
COPY . .
RUN bun install --frozen-lockfile --production
RUN bun run build

# The commented section below seems unnecessary for your current setup.
# install with --production (exclude devDependencies)
# RUN mkdir -p /temp/prod
# COPY package.json bun.lockb /temp/prod/
# RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM oven/bun:latest as run
WORKDIR /app

# Set environment variables for the runtime
ENV NODE_ENV=production
ENV ORIGIN=http://localhost:3000
ENV PROTOCOL_HEADER=x-forwarded-proto
ENV HOST_HEADER=x-forwarded-host

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/build ./build
# RUN bun install --frozen-lockfile --production

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "./build/index.js" ]
