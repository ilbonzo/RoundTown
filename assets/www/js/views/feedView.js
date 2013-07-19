define(['jquery', 'underscore', 'backbone', 'config', 'content', 'feedModel', 'feedsCollection' ], function($, _, Backbone, config, content, Feed, FeedsCollection) {

    // Extends Backbone.Viewi
    var FeedView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function() {
            $(this.el).empty();

            // this.collection = new FeedsCollection();
            // this.collection.bind('all', this.render, this);
            // this.collection.fetch({ dataType: 'jsonp'});

            // this.collection = new FeedsCollection();
            // this.collection.fetch({ dataType: 'jsonp'});
            // console.log(this.collection);
            // this.render();

            this.collection = new FeedsCollection();
            this.collection.fetch();
            console.log(this.collection);
            this.render();

            // var feed1 = new Feed({ id: '1', title: 'pippo', description: "How Bizarre1"});
            // var feed2 = new Feed({ id: '2', title: 'pluto', description: "How Bizarre2"});
            // this.collection2 = new FeedsCollection([feed1, feed2]);
            // console.log(this.collection2);
            // this.render();
        },

        // Renders all of the Category models on the UI
        render: function() {

            var items = [];

            _.each(this.collection, function (id,feed) {
                items.push('<li class="feed-button" id="feed-' + feed.id + '"><a data-id="' + feed.id + '" href="#">' + feed.title + '</a></li>');
            });
            console.log(items);
            /*$('<ul/>', {
                'data-role' : 'listview',
                'data-inset' : 'true',
                'class' : 'dynamic',
                html: items.join('')
            }).appendTo(this.el);
            $('ul.dynamic').listview();*/
        }

    });

    // Returns the View class
    return FeedView;

});