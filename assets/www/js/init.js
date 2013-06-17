define(['jquery', 'jquerymobile', 'config', 'content', 'feed', 'history'],

    function($,jquerymobile, config, content, feed, history) {
        //document.addEventListener("deviceready", onDeviceReady, false);
        $(document).ready(onSystemReady);

        function onSystemReady() {
            $.support.cors = true;
            //show content
            $('html').css('display','block');
            //to fix
            feed.load();

            //register event
            $('#panel-nav a').on('click', function () {
                $('#panel-nav').panel('close');
            });
            $('#home').on('click', function () {
                content.removeAll();
            });
            $('#news').on('click', function (){
                content.removeAll();
                feed.load();
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
        }
    }
);


