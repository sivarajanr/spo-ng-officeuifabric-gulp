var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var changed = require('gulp-changed');
var sp = require('gulp-spsync');
var watch = require('gulp-watch');

//Set your project name
var PROJECT_NAME = 'spo-ng-officeuifabric-gulp';


var settings = {
            "client_id":"",
            "client_secret":"",
            "realm" : "",
            "site" : "https://contoso.sharepoint.com/",
            "verbose": "true"
        };

var SOURCE_APP_SCRIPT_PATH = 'app/**/*.js';
var DEST_APP_SCRIPT_PATH = 'content/_catalogs/masterpage/'+ PROJECT_NAME +'/scripts';

var DEST_EXTERNAL_SCRIPTS_PATH = 'content/_catalogs/masterpage/'+ PROJECT_NAME +'/js';
var DEST_EXTERNAL_CSS_PATH = 'content/_catalogs/masterpage/'+ PROJECT_NAME +'/css';


//Combine all the javascript files under the App folder and create 'combined.js' file for upload 
//with sourcemaps for debugging 

gulp.task('build-app', function () {

    console.log('start - dev task');

    return gulp.src(SOURCE_APP_SCRIPT_PATH)
        .pipe(sourcemaps.init())
        .pipe(concat('combined.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DEST_APP_SCRIPT_PATH));
});


//Call the build scripts and upload the combined.js to SharePoint
gulp.task('spupload-app',['build-app'], function() {

    console.log('starting spupload-app');

    return gulp.src('content/**/scripts/*.*')        
        .pipe(sp(settings)) 
});

//upload the HTML templates from content/_catalogs/masterpage/spo-ng-officeuifabric-gulp/views folder to SharePoint
gulp.task('spupload-views', function() {
    return gulp.src('content/**/views/*.*')
        .pipe(changed('_build'))
        .pipe(sp(settings))
        .pipe(gulp.dest('_build'))
});

//Whenever we modify the JavaScript files or HTML templates, this task will help to upload the modified file to SharePoint immediately.  
gulp.task('watch', function() {

    gulp.watch('content/**/views/*.*', ['spupload-views']);

    gulp.watch('app/**/*.js', ['spupload-app']);   
})


//Each npm packages will have a minified and unminified JavaScript files with documentations. 
//But we need only minified versions and run this task to copy the mentioned js files to our content folder
gulp.task('copy-npmjs', function () {
    console.log('starting external-scripts task');

    return gulp.src([
        /* JS Files */
        'node_modules/angular/angular.min.js',
        'node_modules/ng-office-ui-fabric/ngOfficeUiFabric.min.js'
        
     ]).pipe(gulp.dest(DEST_EXTERNAL_SCRIPTS_PATH));
});

//Each npm packages will have a minified and unminified CSS files with documentations. 
//But we need only minified versions and run this task to copy the mentioned css files to our content folder
gulp.task('copy-npmcss', function () {
    console.log('starting external-scripts task');

    return gulp.src([
        
        /* CSS Files */
        'node_modules/office-ui-fabric/dist/css/fabric.css',
        'node_modules/office-ui-fabric/dist/css/fabric.components.css'
     ]).pipe(gulp.dest(DEST_EXTERNAL_CSS_PATH));
});

//Upload all the files from content folder to SharePoint
gulp.task('spupload', function() {
    return gulp.src('content/**/*.*')        
        .pipe(sp(settings))     
        .pipe(gulp.dest('_build'))
});