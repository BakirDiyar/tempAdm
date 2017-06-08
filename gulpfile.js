var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
   	plumber = require('gulp-plumber');



gulp.task('stylus', function () { 
	var process = {
		compress : true
	}

	gulp.src('stylus/*.styl')
	.pipe(plumber())
	.pipe(stylus(process))
	.pipe(gulp.dest('./css'))
}); 


gulp.task('watch', function(){
	gulp.watch('./stylus/*.styl', ['stylus'])
}); 


gulp.task('default', ['stylus', 'watch'])


