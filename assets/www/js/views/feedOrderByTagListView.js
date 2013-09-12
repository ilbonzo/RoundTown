define(['jquery', 'underscore', 'backbone', 'config', 'content', 'feedModel', 'feedsCollection' ], function($, _, Backbone, config, content, Feed, FeedsCollection) {

    // Extends Backbone.Viewi
    var HomeView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function() {
            window.scrollTo(0, 0);
            this.on('render', this.afterRender);
            $(this.el).empty();
            content.setTitle('News');
            content.hideSubTitle();
            content.showRightButton();
            content.showFeedTagMenu();
            content.hidePlaceTagMenu();
            this.render();
        },

        // Renders all of the Category models on the UI
        render: function() {
            $(this.el).append('<div id="tag0"></div>');
            this.loadByTag(config.tags[0], '#tag0');
            $(this.el).append('<div id="tag1"></div>');
            this.loadByTag(config.tags[1],'#tag1');
            $(this.el).append('<div id="tag2"></div>');
            this.loadByTag(config.tags[2],'#tag2');
            $(this.el).append('<div id="tag3"></div>');
            this.loadByTag(config.tags[3],'#tag3');
            $(this.el).append('<div id="tag4"></div>');
            this.loadByTag(config.tags[4],'#tag4');
            $(this.el).append('<div id="tag5"></div>');
            this.loadByTag(config.tags[5],'#tag5');
        },

        loadByTag: function (tag,elToAppend) {
            var self = this;
            $.getJSON('http://'+config.url+'/feeds?tag=' + tag + '&callback=?', function (feeds) {
                var items = [];
                items.push('<li data-role="list-divider" role="heading" data-theme="a">'+ tag + '</li>');
                $.each(feeds, function (key, feed) {
                    items.push('<li class="feed-button" id="feed-' + feed.id + '"><a class="setSubTitle" data-id="' + feed.id + '" data-title="' + feed.title + '"  href="#feed/' + feed.id + '">' + feed.title + '</a></li>');
                });
                $('<ul/>', {
                    'data-role' : 'listview',
                    'data-inset' : 'true',
                    'class' : 'dynamic newsTag',
                     html: items.join('')
                }).appendTo(elToAppend);
                $('ul.dynamic').listview();
                self.trigger('render');
            });
        },

        afterRender: function() {
            $.mobile.loading('hide');
        }

    });

    // Returns the View class
    return HomeView;

});