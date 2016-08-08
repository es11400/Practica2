// importamos gulp
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task("default", function(){

    // iniciar BrowserSync
    browserSync.init({
         server: "./", // levanta servidor web en carpeta actual
        //proxy: "127.0.0.1:8000",  // actúa como proxy enviando las peticiones a sparrest
        browser: "google chrome"
    });

    // observa cambios en archivos HTML y recargue el navegador
    gulp.watch(["*.html", "css/*.css", "js/*.js"]).on("change", browserSync.reload);

});