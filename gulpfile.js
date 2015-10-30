'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass   = require('gulp-sass'),
  maps   = require('gulp-sourcemaps');

gulp.task("concatScripts", function () {
  return gulp.src([
    'js/jquery.js',
    'js/sticky/jquery.sticky.js',
    'js/main.js'])
  .pipe(maps.init())
  .pipe(concat("app.js")) // 把上面的js file 串近 app.js
  .pipe(maps.write('./'))
  .pipe(gulp.dest("js")) //app.js 放到某個位置(js資料夾裡面)
});

// 任務有相依性
gulp.task("minifyScripts", ["concatScripts"], function (){
  return gulp.src("js/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest("js"));
});

gulp.task("compileSass", function (){
  return gulp.src("scss/application.scss")
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./')) //this path is going to be relative to our output directory ??
  .pipe(gulp.dest("css"));
});

gulp.task("build", ['minifyScripts', 'compileSass']);

gulp.task("default", ["build"]);
