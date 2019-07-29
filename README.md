# Working with Webpack

Simple app to understand the way Webpack works and how to use it.

[![Netlify Status](https://api.netlify.com/api/v1/badges/d78bb6ff-c56c-4261-a278-c8a41ce5d180/deploy-status)](https://app.netlify.com/sites/webpack-add/deploys)

![webpack-add-app](https://imgur.com/AfWHNa5.png)

I know this looks ugly! :)

You can check out this app [here](https://webpack-add.netlify.com/).

## Development mode

* Run `npm start` from the terminal.
* This command will directly open up the browser at `localhost` where you can see the app running!
* This will keep the app running, like a hot reload where the changes you make are rendered instantly, without having to give `npm start` repetetively.
* To exit from dev mode, `cmd+c` or `ctrl+c` at the terminal will do the trick!

## Production mode

* Run `npm run build` from the terminal.
* This will minify all the files: HTML, CSS and JS files.

> There are seperate bundle files for code written by me for the app and code from vendors like [Bootstrap](https://getbootstrap.com/) for styling.

For all the steps followed, I will be creating a [gist](https://gist.github.com/sydrawat/) pretty soon!

> I've followed Colt Steele's [Webpack tutorial on Youtube](https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8).
