# React Frontend Boilerplate

[![npm version](https://badge.fury.io/js/generator-react-frontend-boilerplate.svg)](https://badge.fury.io/js/generator-react-frontend-boilerplate) [![Build Status](https://travis-ci.org/actuallymentor/react-frontend-boilerplate.svg?branch=master)](https://travis-ci.org/actuallymentor/react-frontend-boilerplate)

<img height="50px" alt="react" src="http://i.imgur.com/D19TgT8.png" /><img height="50px" alt="webpack" src="http://i.imgur.com/ZtANAeL.png" /><img height="50px" alt="browsersync" src="http://i.imgur.com/L5peje9.png" /><img height="50px" alt="mocha" src="http://i.imgur.com/yo9d9Qe.png" />

This is a little react project boilerplate for frontend-only projects. I made this so I can quickly made mini projects when bored.

| Component | Module |
| --------- | ------ |
| View engine | React |
| Source JS | ES6 |
| Source Styles | SASS |
| Source compilation | Webpack with Babel |
| Dev server | Browsersync |
| Testing framework | Mocha with Enzyme |

## Live Demo

[Link to live demo on Github Pages]( https://actuallymentor.github.io/react-frontend-boilerplate/ )

<a href="https://actuallymentor.github.io/react-frontend-boilerplate/"><img style="max-width: 100%;" src="http://i.imgur.com/xNMHVx5.png" /></a>

## Getting started

Configuration options I suggest you look at:

| Option | Location |
| ------ | -------- |
| Google Analytics | Add your  tracking ID in the index.html |
| Opengraph, Twitter card metadata | In the head of the index.html |
| Google Schema Metadata | In the ld+json section of the index.html |
| Site title and logo | Props of <Header /> in main.js |
| Site copyright owner | Props of <Footer /> in main.js |
| Set additional menu links | state.menuLinks in state/head.js |
| Remove Lorem paragraph | Props of <Section /> in main.js |


### Through the built in generator

Make sure to have this package installed globally:

```shell
npm install -g generator-react-frontend-boilerplate
```

You can then inside any folder generate a boilerplate:

```shell
generate-react-frontend # generate scaffold
grf                     # shorthand for same command
```

Which will generate the followng scaffold:

```shell
├── LICENSE.md
├── README.md
├── package.json
├── .gitignore
├── .travis.yml
├── .babelrc
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

The frontend source in frontend/src is compiled using webpack.

For development ( with broswersync and file watching ):

`npm start`

For the generation of deployment ready files:

`npm run build`

Note that webpack with --watch will trigger browsersync, this does not mean your backend is running. Only that your frontend is statically served.