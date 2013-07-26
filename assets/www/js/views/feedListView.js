define(['jquery', 'underscore', 'backbone', 'config', 'content', 'feedModel', 'feedsCollection' ], function($, _, Backbone, config, content, Feed, FeedsCollection) {

    // Extends Backbone.Viewi
    var FeedListView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function() {
            this.on('render', this.afterRender);
            $(this.el).empty();
            content.setTitle('News');
            this.collection = new FeedsCollection();
            this.collection.on('sync', this.render, this);
            this.collection.fetch();

        },

        // Renders all of the Category models on the UI
        render: function() {
            this.trigger('render');

            var items = [];
            _.each(this.collection.models, function(model) {
                feed = model.toJSON();
                items.push('<li class="feed-button" id="feed-' + feed.id + '"><a data-id="' + feed.id + '" href="#feed?' + feed.id + '">' + feed.title + '</a></li>');
            });

            $('<ul/>', {
                'data-role' : 'listview',
                'data-inset' : 'true',
                'class' : 'dynamic',
                html: items.join('')
            }).appendTo(this.el);
            $('ul.dynamic').listview();
        },

        afterRender: function() {
            $.mobile.loading('hide');
        }

    });

    // Returns the View class
    return FeedListView;

});