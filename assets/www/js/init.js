define(['jquery'],

    function($) {

        return {
            start: function () {
                $('#startOverlay').remove();

                //register event
                $('#panel-nav a').on('click', function () {
                    $('#panel-nav').panel('close');
                });

                //$('#gallery').on('click', function (){
                //    content.removeAll();
                //    gallery.load();
                //    content.setTitle('Immagini');
                //});

                //$('#weather').on('click', function (){
                //    content.removeAll();
                //    weather.load();
                //});

                //$('#contact').on('click', function (){
                //    content.removeAll();
                //    contact.load();
                //    content.setTitle('Contatti');
                //});
            }
        }
    }
);


