FROM node:14-alpine
LABEL maintainer="Julie Ng <me@julie.io>"

WORKDIR /workspace

# cache dependencies as layer
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production

COPY ["assets/", "/workspace/assets/"]
COPY ["app/", "/workspace/app/"]

EXPOSE ${PORT:-80}
CMD ["npm", "start"]
