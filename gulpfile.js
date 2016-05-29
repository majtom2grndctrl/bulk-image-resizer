var gulp    = require('gulp'),
    gm      = require('gulp-gm'),
    config  = require('./config'),
    sizes   = config.sizes;

gulp.task('default', () => {
    gulp.src('./in-full/*.png')
        .pipe(gm( (gmfile) => {
            return gmfile.resize(sizes.full);
        }))
        .pipe(gm( (gmfile) => {
            return gmfile.setFormat('jpg');
        }))
        .pipe(gulp.dest('./out'));

});
