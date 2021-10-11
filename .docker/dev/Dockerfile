FROM node:16
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Create and define the node_modules's cache directory.
WORKDIR /cache

# install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --silent

# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy source code
COPY . .