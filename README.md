# [Single Element CSS Spinners](http://projects.lukehaas.me/css-loaders)

This is a collection of loading spinners animated with CSS.

Each spinner consists of a single `div` with a class of `loader` and content text of "Loading...".
The text is for screen readers and can be used as a fallback state for older browsers.

The aim of this project was to create a set of minimal loading spinners that are visually appealing and also convey their intended meaning.

A strict limit of one element per loader (not including pseudo-elements) was placed on this project based on the belief that something as simple as a loader doesn't deserve more.

Each loader is given a font size in pixels and all other sizes are in ems so to change the size of a loader, just adjust the font-size.

## Use it in your project

If you want to include the `CSS loaders` immediately inside your project, just grab the minified css version inside the `dist` folder. Otherwise you can also use the `less` or `sass` version present inside `src/less` or `src/sass`.

A demo version using the `CSS loaders` is also present under the `demo` folder so you can have a look at the html code.

## Develop

This project uses `npm` and `Grunt`. If you want to compile the source code and generating new `sass` or `less` version of the library, first clone this repository on your local machine with:

    git clone https://github.com/lukehaas/css-loaders.git

Then, make sure to install all the dependencies running:

    npm install

Install Grunt globally if you don't have that already with:

    npm install -g grunt-cli

Now you can compile your own version of the library running:

    grunt

For compiling the `less` version of the library into the `dist` folder

or

    grunt compile:sass

For compiling the `sass` version of the library into the `dist` folder

## Demo

[![css-loaders-screenshot](https://raw.githubusercontent.com/lukehaas/css-loaders/step2/images/css-loaders-screenshot.jpg)](http://projects.lukehaas.me/css-loaders)

> [Check it live](http://projects.lukehaas.me/css-loaders).

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 10+ ✔ | Chrome 4.0+ ✔ | Firefox 16.0+ ✔ | Opera 15.0+ ✔ | Safari 4.0+ ✔ |

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :)

## History

For detailed changelog, check [Releases](https://github.com/lukehaas/css-loaders/releases).

## License

[MIT License](https://github.com/lukehaas/css-loaders/blob/step2/LICENSE)
