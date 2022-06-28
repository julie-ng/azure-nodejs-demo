FROM node:16-alpine
LABEL maintainer="Julie Ng <me@julie.io>"

# Use `dumb-init` to follow security best practices
# https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/
RUN apk add --update --no-cache curl dumb-init

# so app defaults to using TLS
ENV NODE_ENV production

# bind to host
ENV HOST '0.0.0.0'

# default to port 80
EXPOSE ${PORT:-80}

WORKDIR /usr/workspace

# cache dependencies as layer
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --production

# copy rest of app (respects .dockerignore)
COPY [".", "./"]

# Don't run as root
USER node

HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost:${PORT}/health || exit 1

CMD ["dumb-init", "node", "app/server.js"]