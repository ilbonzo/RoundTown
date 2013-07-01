define(['init'], function(init) {

        document.addEventListener("deviceready", onSystemReady, false);
        //for web version
        //$(document).ready(onSystemReady);
        function onSystemReady() {
            init.start();
        }
    }
);