# React Frontend Boilerplate 

<img height="50px" alt="react" src="http://i.imgur.com/D19TgT8.png" />
<img height="50px" alt="webpack" src="http://i.imgur.com/ZtANAeL.png" />
<img height="50px" alt="browsersync" src="http://i.imgur.com/L5peje9.png" />

This is a little react project boilerplate for frontend-only projects. I made this so I can quickly made mini projects when bored.

## Getting started

Git clone this repository and npm install.

``` shell
git clone https://github.com/actuallymentor/react-node-boilerplate my-app
cd my-app
npm install
```

**Compiling the frontend**

The frontend source in frontend/src is compiled using webpack. Make sure you have it globally installed:

```shell
npm install -g webpack
```

You can then fun webpack either once:

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