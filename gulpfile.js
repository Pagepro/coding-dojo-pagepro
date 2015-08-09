'use strict';

var gulp = require('gulp');
var jestRunner = require('gulp-jest-iojs');
var eslint = require('gulp-eslint');

var DIR = './lib/**/*.js';

var JEST_OPTIONS = {
  collectCoverage: true,
  testDirectoryName: '__tests__',
  moduleFileExtensions: [
    'js',
    'json',
    'react'
  ]
};

gulp.task('test', ['lint'], function () {
  return gulp.src('./lib/')
    .pipe(jestRunner(JEST_OPTIONS));
});

gulp.task('lint', function () {
    return gulp.src([DIR])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watch', function () {
  gulp.watch(DIR, [
    'test',
  ]);
});

// define tasks here
gulp.task('default', [
  'test',
  'watch'
]);
