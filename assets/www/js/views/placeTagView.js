define(['jquery', 'underscore', 'backbone', 'config', 'content'], function($, _, Backbone, config, content) {

    // Extends Backbone.Viewi
    var PlaceTagView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function() {
            window.scrollTo(0, 0);
            this.on('render', this.afterRender);
            $(this.el).empty();
            content.setTitle('Luoghi');
            content.hideSubTitle();
            content.hideRightButton();
            content.hideFeedTagMenu();
            content.hidePlaceTagMenu();
            this.render();
        },

        // Renders all of the Category models on the UI
        render: function() {
            var items = [];
            for (var i = 0; i < config.foursquareCategories.length; i++) {
                /*jshint multistr: true */
                items.push('<li class="tag-button" id="tag-' + config.foursquareCategories[i].id + '">\
                        <a class="setSubTitle" data-id="' + config.foursquareCategories[i].id + '" data-title="' + config.foursquareCategories[i].name + '" href="#placelist/' + config.foursquareCategories[i].id + '">\
                        <img src="' + config.foursquareCategories[i].icon.prefix + 'bg_88' + config.foursquareCategories[i].icon.suffix + '">\
                        <h2>' + config.foursquareCategories[i].name + '</h2>\
                        </a>\
                        </li>');
            }

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
    return PlaceTagView;

});