# Grunt Config Example

Example of grunt config setup using [load-grunt-config](https://github.com/firstandthird/load-grunt-config) plugin to break up Gruntfile by task to make it more manageable.

- [Install](#install)
- [Config](#config)
- [Tasks](#tasks)

## Install

- Install [Node.js](https://nodejs.org/).

- Install [nvm](https://github.com/creationix/nvm) if required:

* node version v4.2.6
* npm version 2.14.12

- Install [ImageOptim](https://imageoptim.com/) desktop app.

- Run `npm install` from project root to install node modules.

## Config

Grunt config files are stored in `grunt/config` folder.

## Tasks

Grunt task files are stored in `grunt/tasks` folder.

### Build

Compiles HTML files and assets into `public` folder and makes them available at `http://localhost:4001`.

Run `grunt` or `grunt build` from project root.

### Dist

Compiles and minifies HTML files and assets into `dist` folder.

Run `grunt dist` from project root.