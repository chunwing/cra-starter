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

To lazy load a React application, we use a library called  [react-loadable](https://github.com/jamiebuilds/react-loadable). It has a Higher Order Component (HOC) called Loadable. Loadable dynamically loads any module before rendering it into your app.

To install the library as a dependency, run:
```shell
yarn add -D react-loadable @types/react-loadable
```
After installation, create a new file in  `src`  called  `LoadableApp.js`

Copy the code below into it:
```typescript
import  React, { Component, ReactElement } from  "react";
import  Loadable  from  "react-loadable";
const  LoadApp = Loadable({
	loader: () =>  import("./App"),
	loading() {
		return  <div>Loading...</div>;
	},
	timeout:  10000  // 10 seconds
});

export  default  class  LoadableApp  extends  Component {
	render():ReactElement {
		return  <LoadApp/>
	}
}
```

Let me explain the code above:

-   we imported the HOC Loadable from react-loadable
-   we passed in an object to tell Loadable what to do
-   **loader**: this tells Loadable to import our specified component
-   **loading**: a message to display to users while Loadable is importing our component
-   **timeout**: this would tell Loadable how long to try loading the component before it fails. Handles issues with slow internet connection
-   we assign the component returned by Loadable to  `LoadApp`
-   we render the returned component

Now, we have to update our  `index.js`  to render the lazy-loaded and code-split component. We need to change every mention of  `App.js`  with the  `LoadableApp.js`.


## Measuring Performance
By default, Create React App includes a performance relayer that allows you to measure and analyze the performance of your application using different metrics.

To measure any of the supported metrics, you only need to pass a function into the  `reportWebVitals`  function in  `index.js`:
```shell
reportWebVitals(console.log);
```
This function is fired when the final values for any of the metrics have finished calculating on the page. You can use it to log any of the results to the console or send to a particular endpoint.