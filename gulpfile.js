//-----------------------------------------------------------------------image min

/*

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images-minified/'))
);


*/

//----------------------------------------------------------------------------image resize

var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
 /*
gulp.task('default', function () {
  gulp.src('images/*')
    .pipe(imageResize({
      width : 100,
      height : 100,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist'));
});

*/

gulp.task('default', function () {
  gulp.src('images/*')
    .pipe(imageResize({
      filter:'Catrom',
      quality:0
    }))
  
  .pipe(imagemin())
    .pipe(gulp.dest('images-web'));
});
