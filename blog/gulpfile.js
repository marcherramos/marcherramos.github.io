var gulp = require('gulp');
var del = require("del");
gulp.task('copy', function(){
    return (gulp.src('./public/**/*.*')
   .pipe(gulp.dest('./..')));
});
// gulp.task('clean', function () {
//     return del([
//         './../chunk-map.json',
//       ]);
// });