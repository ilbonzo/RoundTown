define(['jquery', 'underscore', 'backbone', 'config', 'content', 'tweetModel', 'tweetsCollection' ], function($, _, Backbone, config, content, Tweet, TweetsCollection) {

    // Extends Backbone.Viewi
    var TweetListView = Backbone.View.extend( {

        el: '#content',

        // The View Constructor
        initialize: function() {
            this.on('render', this.afterRender);
            this.$el.empty();
            content.setTitle('Tweets');
            content.hideSubTitle();

            this.collection = new TweetsCollection();
            this.collection.on('sync', this.render, this);
            this.collection.fetch();
        },

        // Renders all of the Category models on the UI
        render: function() {
            var items = [];
            _.each(this.collection.models, function(model) {
                tweet= model.toJSON();
                /*jshint multistr: true */
                items.push('<li class="tweet-button" id="tweet-' + tweet.id + '">\
                <a href="' + tweet.url + '" target="_blank">\
                <p>' + tweet.text + '</p>\
                <p class="userTweet"><strong><em>@' + tweet.user + '</em></strong></p></a>\
                </li>');
            });

                // <p class="ui-li-aside"><strong>' + tweet.user + '</strong></p>\
            $('<ul/>', {
                'data-role' : 'listview',
                'data-inset' : 'true',
                'class' : 'dynamic',
                html: items.join('')
            }).appendTo(this.el);
            $('ul.dynamic').listview();
            $.mobile.loading('hide');

        },

        afterRender: function() {
            $.mobile.loading('hide');
        }

    });

    // Returns the View class
    return TweetListView;

});