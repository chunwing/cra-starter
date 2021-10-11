# React App Starter

## Adding React and TypeScript
Quick start with the official Redux+TS template for  [Create React App](https://github.com/facebook/create-react-app).

To use this template within your project, add  `--template redux-typescript`  when creating a new app.

For example:
```shell
yarn create react-app my-app --template redux-typescript
```

TypeScript is configured with a file called `tsconfig.json`. Let’s create this file in the root of our project with the following content:
```json
{
  "compilerOptions": {
	"lib": [
	  "dom",
	  "dom.iterable",
	  "esnext",
	  "webworker"
	],
	"allowJs": true,
	"skipLibCheck": true,
	"esModuleInterop": true,
	"allowSyntheticDefaultImports": true,
	"strict": true,
	"forceConsistentCasingInFileNames": true,
	"noFallthroughCasesInSwitch": true,
	"module": "esnext",
	"moduleResolution": "node",
	"resolveJsonModule": true,
	"isolatedModules": true,
	"noEmit": true,
	"jsx": "react-jsx"
  },
  "include": [
	"src"
  ],
  "exclude": [
	"node_modules/**/*"
  ]
}
```
Here’s an explanation of the settings we have used:

-   `lib`: The standard typing to be included in the type checking process. In our case, we have chosen to use the types for the browser’s DOM and the latest version of ECMAScript.
-   `allowJs`: Whether to allow JavaScript files to be compiled.
-   `allowSyntheticDefaultImports`: This allows default imports from modules with no default export in the type checking process.
-   `skipLibCheck`: Whether to skip type checking of all the type declaration files (*.d.ts).
-   `esModuleInterop`: This enables compatibility with Babel.
-   `strict`: This sets the level of type checking to very high. When this is  `true`, the project is said to be running in strict mode.
-   `forceConsistentCasingInFileNames`: Ensures that the casing of referenced file names is consistent during the type checking process.
-   `moduleResolution`: How module dependencies get resolved, which is node for our project.
-   `resolveJsonModule`: This allows modules to be in  `.json`  files which are useful for configuration files.
-   `noEmit`: Whether to suppress TypeScript generating code during the compilation process. This is  `true`  in our project because Babel will be generating the JavaScript code.
-   `jsx`: Whether to support JSX in  `.tsx`  files.
-   `include`: These are the files and folders for TypeScript to check. In our project, we have specified all the files in the  `src`  folder.
## Installing webpack and Babel
```shell
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin @babel/core @babel/preset-env babel-loader @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime @babel/runtime
```

Here’s an explanation of the packages we have just installed:
- `webpack`: used bundler for JavaScript applications
- `webpack-cli`: the command-line tool that gives us access to some webpack commands
- `webpack-dev-server`: a client-side server with the ability to reload live solely for development purposes
- `html-webpack-plugin`: this will generate and update the HTML templates for our application
- `@babel/core`: As the name suggests, this is the core Babel library.
- `@babel/preset-env`: This is a collection of plugins that allow us to use the latest JavaScript features but still target browsers that don’t support them.
- `babel-loader`: allow Babel to transpile the React and TypeScript code into JavaScript.
- `@babel/preset-react`: This is a collection of plugins that enable Babel to transform React code into JavaScript.
-   `@babel/preset-typescript`: This is a plugin that enables Babel to transform TypeScript code into JavaScript.
-   `@babel/plugin-transform-runtime`  and  `@babel/runtime`: These are plugins that allow us to use the  `async`  and  `await`  JavaScript features.
## Configuring Babel
Babel is configured in a file called `.babelrc` created the root of our project. This configuration tells Babel to use the plugins we have installed.
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ],
  "ignore": [
	"node_modules"
  ],
  "comments": false,
  "minified": true
}
```
## Adding linting
We are going to use [**ESLint**](https://eslint.org/) in our project. ESLint can help us find problematic coding patterns or code that doesn’t adhere to specific style guidelines

```shell
yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
Below is an explanation of the packages that we just installed:
-   `eslint`: This is the core ESLint library.
-   `eslint-plugin-react`: This contains some standard linting rules for React code.
-   `eslint-plugin-react-hooks`: This includes some linting rules for React hooks code.
-   `@typescript-eslint/parser`: This allows TypeScript code to be linted.
-   `@typescript-eslint/eslint-plugin`: This contains some standard linting rules for TypeScript code.

ESLint can be configured in a `.eslintrc.json` file in the project root
```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react-hooks"
  ],
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  }
}
```
## Setting up production-specific configurations
#### Install the plugin to extract our styles, run:
```shell
yarn add -D mini-css-extract-plugin
```
The plugin extracts our CSS from the JS files to a separate file when going into production.
#### Install the plugins to optimize our CSS, run:
```shell
yarn add -D optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin
```

## Lazying loading our app

React code splitting made easy.
```shell
yarn add -D @loadable/component @types/loadable__component
```


## Measuring Performance
By default, Create React App includes a performance relayer that allows you to measure and analyze the performance of your application using different metrics.

To measure any of the supported metrics, you only need to pass a function into the  `reportWebVitals`  function in  `index.js`:
```shell
reportWebVitals(console.log);
```
This function is fired when the final values for any of the metrics have finished calculating on the page. You can use it to log any of the results to the console or send to a particular endpoint.

## Develop React Development in Docker container
Use just one command ``docker-compose up`` to start your development workflow in any host operating system.

### Initial setup with Docker
Create a folder for saving docker-related files in the project root.

```
├──.docker                  
│   ├── ci        
│   ├── dev 
│       └── Dockerfile        # our development dockerfile
│   ├── prod
│   └── scripts                
└── ...
```

Create a Dockerfile in the .docker/dev/ directory.
```dockerfile
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
```
Create a file name docker-compose.yml in the project's root directory. Following is my docker-compose.yml
```yml
version: "3.8"
services:
  web:
    build:
      context: .
      dockerfile: ./.docker/dev/Dockerfile
    restart: unless-stopped
    volumes:
      - ".:/app"
    ports:
      - 3000:3000
    command: >
      bash -c "cp -rfu /cache/node_modules/. /app/node_modules/  
      && yarn start"

  test:
    build:
      context: .
      dockerfile: ./.docker/dev/Dockerfile
    volumes:
      - .:/app
      - /app/node_modules
    command: ["yarn", "test"]
```
## Development workflow for developers
1. Pull the source code
2. For the first time or the package.json changed run
```shell
docker-compose build
```
3. Then, run the following command to start the environment.
```shell
docker-compose up -d
```
4. To see the logs of your app
```shell
docker-compose logs -f web
```
5. To see and follow the logs of your tests
```shell
docker-compose logs -f test
```
6. If you need to install any npm package.
```shell
docker-compose exec web npm install pacakge-name
```
7. stop the containers
```shell
docker-compose down
```