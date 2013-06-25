define(['jquery', 'jquerymobile', 'config', 'content', 'feed', 'history', 'weather', 'home', 'klass', 'photoswipe', 'gallery', 'contact'],

    function($,jquerymobile, config, content, feed, history, weather, home, klass, photoswipe, gallery, contact) {
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
                content.setTitle();
            });

            $('#news').on('click', function (){
                content.removeAll();
                for(var i in config.tags) {
                    feed.loadByTag(config.tags[i],'#content');
                }
                content.setTitle('News');
            });

            $('#history').on('click', function (){
                content.removeAll();
                history.load();
                content.setTitle('Storia');
            });

            $(document).on('click', '.feed-button a', function () {
                content.removeAll();
                id = $(this).data('id');
                f = feed.get(id);
            });

            $('#gallery').on('click', function (){
                content.removeAll();
                gallery.load();
                content.setTitle('Immagini');
            });

            //$('#weather').on('click', function (){
            //    content.removeAll();
            //    weather.load();
            //});

            $('#contact').on('click', function (){
                content.removeAll();
                contact.load();
                content.setTitle('Contatti');
            });
        }
    }
);


