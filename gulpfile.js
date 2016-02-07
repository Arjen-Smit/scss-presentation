var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
	gulp.watch('./src/*.scss',['sass']);
});

gulp.task('sass', function() {
	gulp.src('./src/*.scss')
	.pipe(sass(
		{
			outputStyle: 'expanded',
			sourceComments: false
		}).on('error', sass.logError))
	.pipe(gulp.dest('./dist'));
});
