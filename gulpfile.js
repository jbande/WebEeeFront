/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var fs = require('fs');
var gulp = require('gulp'),
  consolidate = require('gulp-consolidate'),
  iconfont = require('gulp-iconfont');

var webfont = require('gulp-webfont');

var webfont_config = {
  types:'eot,woff2,woff,ttf,svg',
  ligatures: true
};

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('iconfont', function () {
  return gulp.src('../src/assets/images/*.svg')
    .pipe(iconfont({
      fontName: 'eeeiconfont',
      formats: ['ttf', 'eot', 'woff', 'woff2'],
      appendCodepoints: true,
      appendUnicode: false,
      normalize: true,
      fontHeight: 1000,
      centerHorizontally: true
    }))
    .on('glyphs', function (glyphs, options) {
      gulp.src('../src/assets/iconfont.css')
        .pipe(consolidate('underscore', {
          glyphs: glyphs,
          fontName: options.fontName,
          fontDate: new Date().getTime()
        }))
        .pipe(gulp.dest('iconfont'));

      gulp.src('../src/assets/iconfont.html')
        .pipe(consolidate('underscore', {
          glyphs: glyphs,
          fontName: options.fontName
        }))
        .pipe(gulp.dest('iconfont'));
    })
    .pipe(gulp.dest('iconfont'));
});

gulp.task('fonticos', function () {
 return gulp.src('../src/assets/images/*.svg')
 .pipe(webfont(webfont_config))
 .pipe(gulp.dest('dist'));
 });

gulp.task('default', ['clean', 'fonticos', 'iconfont'], function () {
  gulp.start('build');
});


