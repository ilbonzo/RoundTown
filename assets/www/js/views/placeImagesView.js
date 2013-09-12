define(['jquery', 'underscore', 'backbone', 'config', 'content', 'photoswipe' ], function($, _, Backbone, config, content, photoswipe) {

    // Extends Backbone.View
    var PlaceImagesView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function(options) {
            window.scrollTo(0, 0);
            this.on('render', this.afterRender);
            $(this.el).empty();
            content.setTitle('Immagini');
            content.showRightButton();
            content.hideFeedTagMenu();
            content.showPlaceTagMenu();
            this.render(options.placeId);

        },

        // Renders all of the Category models on the UI
        render: function(id) {
            var self = this;
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

                    content.showSubTitle();

                    $('.gallery a').photoSwipe({
                        enableMouseWheel: true,
                        enableKeyboard: true
                    });

                    self.trigger('render');
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