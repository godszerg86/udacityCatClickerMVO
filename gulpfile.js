const gulp = require('gulp');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('serve', function() {
  
    gulp.watch('./src/scss/**/*.scss', ['sass']);
   
});

gulp.task('sass', function() {
    return gulp.src('./src/scss/mustard-ui.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: [
            'Last 2 Chrome versions',
            'Last 2 Edge versions',
            'Last 2 Firefox versions',
            'Last 2 Safari versions',
            'Last 3 iOS versions',
            'IE 11'
        ],
        cascade: false
    }))
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('default', ['serve', 'sass']);
