define(['init'], function(init) {

        // for app version
        document.addEventListener("deviceready", onSystemReady, false);
        //for web version
        // $(document).ready(onSystemReady);
        function onSystemReady() {
            init.start();
        }
    }
);