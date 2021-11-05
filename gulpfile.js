const gulp = require('gulp');
const dartSass = require('sass');
const connect = require('gulp-connect');
const sass = require('gulp-sass')(dartSass);
const clean_css = require('gulp-clean-css');
const autoprefix = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const rimraf = require("rimraf");
const path = require('path');
const size = require('gulp-size');

const SOURCE_PATH = './sass';
const DIST_PATH = './css';
const WATCH_MODE = process.argv.includes('--watch');
const SASS_CONFIG = { outputStyle: 'compressed', errLogToConsole: true };

gulp.task('build', () => {
  rimraf.sync(path.join(__dirname, `${DIST_PATH}`));
  
	const stream = gulp.src(`${SOURCE_PATH}/**/*.scss`)
    .pipe(sass(SASS_CONFIG))
    .pipe(clean_css())
    .pipe(autoprefix('last 2 versions'))
    .pipe(plumber(true))
		.pipe(size())

  WATCH_MODE && stream.pipe(connect.reload());
	return stream.pipe(gulp.dest(DIST_PATH));
});

gulp.task('watch', done => {
	if (WATCH_MODE) {		
    connect.server({
      root: './',
      livereload: true
    });

    gulp.watch([`${SOURCE_PATH}/**/*.scss`, './**/*.html'], gulp.series('build'));
	} else {
		done();
	}
});

gulp.task('default', gulp.series('build', 'watch'));