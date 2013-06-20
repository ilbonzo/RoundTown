define(['jquery', 'jquerymobile', 'config', 'content', 'feed', 'history', 'weather'],

    function($,jquerymobile, config, content, feed, history, weather) {
        //document.addEventListener("deviceready", onDeviceReady, false);
        $(document).ready(onSystemReady);

        function onSystemReady() {
            $.support.cors = true;
            //show content
            $('html').css('display','block');
            content.removeAll();
            tags = ['Comune','Scuola','Varie'];
                for(var i in tags) {
                feed.loadByTag(tags[i]);
            }

            //register event
            $('#panel-nav a').on('click', function () {
                $('#panel-nav').panel('close');
            });
            $('#home').on('click', function () {
                content.removeAll();
            });
            $('#news').on('click', function (){
                content.removeAll();
                tags = ['Comune','Scuola','Varie'];
                for(var i in tags) {
                    feed.loadByTag(tags[i]);
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

            $('#weather').on('click', function (){
                content.removeAll();
                weather.load();
            });
        }
    }
);


