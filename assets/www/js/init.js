define(['jquery', 'jquerymobile', 'config', 'content', 'feed', 'history', 'weather', 'home', 'gallery'],

    function($,jquerymobile, config, content, feed, history, weather, home, gallery) {
        //document.addEventListener("deviceready", onDeviceReady, false);
        $(document).ready(onSystemReady);

        function onSystemReady() {
            $.support.cors = true;
            //show content
            $('html').css('display','block');
            home.load();

            //register event
            $('#panel-nav a').on('click', function () {
                $('#panel-nav').panel('close');
            });

            $('#home').on('click', function () {
                content.removeAll();
                home.load();
            });

            $('#news').on('click', function (){
                content.removeAll();
                for(var i in config.tags) {
                    feed.loadByTag(config.tags[i],'#content');
                }
            });

            $('#history').on('click', function (){
                content.removeAll();
                history.load();
            });

            $(document).on('click', '.feed-button a', function () {
                content.removeAll();
                id = $(this).data('id');
                f = feed.get(id);
            });

            $('#gallery').on('click', function (){
                content.removeAll();
                gallery.load();
            });

            $('#weather').on('click', function (){
                content.removeAll();
                weather.load();
            });
        }
    }
);


