define(['jquery', 'underscore', 'backbone', 'config', 'content', 'facebookFeedModel', 'facebookFeedsCollection' ], function($, _, Backbone, config, content, FacebookFeed, FacebookFeedsCollection) {

    // Extends Backbone.Viewi
    var FacebookFeedListView = Backbone.View.extend( {

        el: '#content',

        // The View Constructor
        initialize: function(options) {
            window.scrollTo(0, 0);
            this.on('render', this.afterRender);
            this.$el.empty();
            content.hideRightButton();
            content.hideFeedTagMenu();
            content.hidePlaceTagMenu();
            content.setTitle('Facebook');
            if (typeof options === 'undefined') {
                content.hideSubTitle();
                var searchParams = {};
            } else {
                content.showSubTitle();
                var searchParams = {
                  'tag': options.tag
                };
            }

            this.collection = new FacebookFeedsCollection();
            this.collection.on('sync', this.render, this);

            this.collection.fetch({data: $.param(searchParams)});

        },

        // Renders all of the Category models on the UI
        render: function() {
            var items = [];
            _.each(this.collection.models, function(model) {
                feed = model.toJSON();
                items.push('<li class="feed-button" id="feed-' + feed.id + '"><a class="setSubTitle" data-id="' + feed.id + '" data-title="' + feed.title + '" href="#facebook/' + feed.id + '">' + feed.title + '</a></li>');
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
    return FacebookFeedListView;

});
