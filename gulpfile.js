"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var prefix = require('gulp-autoprefixer');
var uglify = require('gulp-uglifyjs');

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

gulp.task('watch', function() {
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/js/*.js', ['js']);
});
