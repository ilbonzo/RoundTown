define(['jquery', 'underscore', 'backbone', 'config', 'content', 'placeModel', 'placesCollection' ], function($, _, Backbone, config, content, Place, PlacesCollection) {

    // Extends Backbone.Viewi
    var PlaceListView = Backbone.View.extend( {

        el: '#content',

        // The View Constructor
        initialize: function(options) {
            this.on('render', this.afterRender);
            this.$el.empty();
            content.setTitle('Luoghi');
            content.showRightButton();
            content.hideFeedTagMenu();
            content.showPlaceTagMenu();

            if (typeof options === 'undefined') {
                content.hideSubTitle();
                var searchParams = {};
            } else {
                content.showSubTitle();
                var searchParams = {
                  'tag': options.tag
                };
            }

            this.collection = new PlacesCollection();
            this.collection.on('sync', this.render, this);
            this.collection.fetch({data: $.param(searchParams)});
        },

        // Renders all of the Category models on the UI
        render: function() {
            var items = [];
            _.each(this.collection.models, function(model) {
                place= model.toJSON();
                /*jshint multistr: true */
                items.push('<li class="place-button" id="place-' + place.id + '">\
                    <a data-id="' + place.id + '" data-title="' + place.name + '" href="#place/' + place.id + '">\
                    <img src="' + place.icon + '">\
                    <h2>' + place.name + '</h2>\
                    </a>\
                    </li>');
            });

            $('<ul/>', {
                'data-role' : 'listview',
                'data-inset' : 'true',
                'class' : 'dynamic',
                html: items.join('')
            }).appendTo(this.el);
            $('ul.dynamic').listview();
            this.trigger('render');

        },

        afterRender: function() {
            $.mobile.loading('hide');
        }

    });

    // Returns the View class
    return PlaceListView;

});