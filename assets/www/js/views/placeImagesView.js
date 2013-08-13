define(['jquery', 'underscore', 'backbone', 'config', 'content', 'photoswipe' ], function($, _, Backbone, config, content, photoswipe) {

    // Extends Backbone.View
    var PlaceImagesView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function(options) {
            this.on('render', this.afterRender);
            $(this.el).empty();
            this.render(options.placeId);
        },

        // Renders all of the Category models on the UI
        render: function(id) {
            this.trigger('render');

            $.ajax({
                url: 'http://'+config.url+'/places/' + id +'/images?callback=?',
                type: 'GET',
                dataType: 'jsonp',
                success: function (photos) {
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
                },
                error: function () {

                }
            });
        },

        afterRender: function() {
            $.mobile.loading('hide');
        }

    });
    // Returns the View class
    return PlaceImagesView;

});