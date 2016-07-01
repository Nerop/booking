"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var prefix = require('gulp-autoprefixer');
var uglify = require('gulp-uglifyjs');
var filter = require('gulp-filter');
var mainBowerFiles = require('gulp-main-bower-files');

gulp.task('default', ['css', 'js'], function () {
    console.log('Build successful');
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
      .pipe(concat("bundle.css"))
      .pipe(prefix({
              browsers: ['last 5 versions']
          }))
      .pipe(csso())
      .pipe(rename("bundle.min.css"))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify()) //compression js
    .pipe(gulp.dest('dist/js'));
});

gulp.task('bower', function() {
    var filterJS = filter(['**/*.js'], { restore: true });
    var filterCSS = filter(['**/*.css'], { restore: true });
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            overrides: {
                bootstrap: {
                    main: [
                        './dist/js/bootstrap.js',
                        './dist/css/bootstrap.css',
                        './dist/fonts/*.*'
                    ]
                }
            }
        }))
        .pipe(filterJS)
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(filterJS.restore)
        .pipe(filterCSS)
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(filterCSS.restore)
        .pipe(gulp.dest('dist/libs'));
});

gulp.task('watch', function() {
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/js/*.js', ['js']);
});
