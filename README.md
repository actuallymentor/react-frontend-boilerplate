# React Frontend Boilerplate [![npm version](https://badge.fury.io/js/react-frontend-boilerplate.svg)](https://badge.fury.io/js/react-frontend-boilerplate)

<img height="50px" alt="react" src="http://i.imgur.com/D19TgT8.png" />
<img height="50px" alt="webpack" src="http://i.imgur.com/ZtANAeL.png" />
<img height="50px" alt="browsersync" src="http://i.imgur.com/L5peje9.png" />

There is a full stack (node, passport etc) version of this boilerplate available [here]( https://github.com/actuallymentor/react-node-boilerplate )

This is a little react project boilerplate for frontend-only projects. I made this so I can quickly made mini projects when bored.

| Component | Module |
| --------- | ------ |
| View engine | React |
| Source JS | ES6 |
| Source Styles | SASS |
| Source compilation | Webpack with Babel |
| Dev server | Browsersync |

## Live Demo

[Link to live demo on Github Pages]( https://actuallymentor.github.io/react-frontend-boilerplate/ )

<a href="https://actuallymentor.github.io/react-frontend-boilerplate/"><img style="max-width: 100%;" src="http://i.imgur.com/xNMHVx5.png" /></a>

## Getting started

### Through the built in generator

Make sure to have this package installed globally:

```shell
npm install -g react-frontend-boilerplate
```

You can then inside any folder generate a boilerplate:

```shell
generate-react-frontend
```

Which will generate the followng scaffold:

```shell
├── LICENSE.md
├── README.md
├── package.json
├── public
│   └── index.html
├── src
│   ├── main.js
│   ├── state
│   │   ├── body.js
│   │   └── head.js
│   ├── stateless
│   │   ├── body-views.js
│   │   ├── footer-views.js
│   │   ├── head-views.js
│   │   └── lorem-ipsum-view.js
│   └── styles
│       ├── hamburgers
│       │   ├── LICENSE
│       │   └── hamburgericon.scss
│       └── styles.scss
└── webpack.config.js
```

### Through git

Git clone this repository and npm install.

``` shell
git clone https://github.com/actuallymentor/react-frontend-boilerplate my-app
cd my-app
npm install
```

**Compiling the frontend**

The frontend source in frontend/src is compiled using webpack. Make sure you have it globally installed:

```shell
npm install -g webpack
```

You can then run webpack either once:

```shell
webpack --progress -d # for development mode, no minification etc
webpack --progress -p # for production code

```

Or as a watching service that rebuilds when the frontend is edited

```shell
webpack --progress -d --watch # for development mode, no minification etc
webpack --progress -p --watch # for production code
```

Note that webpack with --watch will trigger browsersync, this does not mean your backend is running. Only that your frontend is statically served.