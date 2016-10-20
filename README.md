Grunt Config Example
====================

> Example of grunt config setup using [load-grunt-config](https://github.com/firstandthird/load-grunt-config) plugin to break up Gruntfile by task to make it more manageable.

- [Grunt config directory layout](#grunt-config-directory-layout)
- [Install](#install)
- [Config](#config)
- [Tasks](#tasks)

## Grunt config directory layout
    .
    ├── Gruntfile.js
    ├── grunt
    │   ├── config
    │   │   ├── copy.js
    │   │   ├── cssmin.js
    │   │   ├── uglify.js
    │   │   └── ...
    │   ├── rc
    │   │   ├── .jshintrc
    │   │   ├── .jscsrc
    │   │   └── ...
    │   └── tasks
    │       ├── default.js
    │       ├── build.js
    │       ├── dist.js
    │       └── ...
    └── ...

## Install

- Install [Node.js](https://nodejs.org/)

- Install [nvm](https://github.com/creationix/nvm) if required (node version v6.8.0, npm version 3.10.8)

- Install [ImageOptim](https://imageoptim.com/) desktop app

- Run `npm install` from project root to install node modules

## Config

Grunt config files are stored in `grunt/config` folder.

## Tasks

Grunt task files are stored in `grunt/tasks` folder.

### Build

Compiles HTML files and assets into `public` folder and makes them available at `http://localhost:4001`.

Run `npm start` from project root.

### Dist

Compiles and minifies HTML files and assets into `dist` folder.

Run `npm run dist` from project root.