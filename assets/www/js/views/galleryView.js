define(['jquery', 'underscore', 'backbone', 'config', 'content', 'photoswipe' ], function($, _, Backbone, config, content, photoswipe) {

    // Extends Backbone.View
    var GalleryView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function() {
            $(this.el).empty();
            content.setTitle('Immagini');
            this.render();
        },

        // Renders all of the Category models on the UI
        render: function() {
            $.getJSON('http://'+config.url+'/images?callback=?', function (photos) {
                var items = [];
                $.each(photos, function (key, image) {
                    items.push('<li><a href="' + image.url + '"  rel="external"><img src="' + image.url_thumb + '" alt="' + image.user + '"/></a></li>');
                });
                $('<ul/>', {
                    'class' : 'gallery dynamic photoItem',
                    html: items.join('')
                }).appendTo('#content');

                $('.gallery a').photoSwipe({
                    enableMouseWheel: true,
                    enableKeyboard: true
                });

            });

        }

    });
    // Returns the View class
    return GalleryView;

});