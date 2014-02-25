# jshint-growl-reporter
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> Growl reporter for JSHint

Reports summary when there are multiple errors, shows specific error when there is only one error.

## Install

Install with [npm](https://npmjs.org/package/jshint-growl-reporter): `npm install -D jshint-growl-reporter`

## Usage

Use it with:

### JSHint CLI
```
jshint --reporter jshint-growl-reporter.js file.js
```
### [gulp-jshint](https://github.com/wearefractal/gulp-jshint)

```js
gulp.task('default', function () {
  gulp.src(['file.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-growl-reporter'));
});
```

### [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

```js
grunt.initConfig({
  jshint: {
    options: {
      reporter: require('jshint-growl-reporter')
    },
    target: ['file.js']
  }
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['jshint']);
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/jshint-growl-reporter
[npm-image]: https://badge.fury.io/js/jshint-growl-reporter.png

[travis-url]: http://travis-ci.org/mollerse/jshint-growl-reporter
[travis-image]: https://secure.travis-ci.org/mollerse/jshint-growl-reporter.png?branch=master

[depstat-url]: https://david-dm.org/mollerse/jshint-growl-reporter
[depstat-image]: https://david-dm.org/mollerse/jshint-growl-reporter.png?theme=shields.io