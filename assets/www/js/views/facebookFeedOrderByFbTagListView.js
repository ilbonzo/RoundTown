define(['jquery', 'underscore', 'backbone', 'config', 'content', 'facebookFeedModel', 'facebookFeedsCollection' ], function($, _, Backbone, config, content, FacebookFeed, FacebookFeedsCollection) {

    // Extends Backbone.Viewi
    var FacebookFeedOrderByFbTagListView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function() {
            window.scrollTo(0, 0);
            this.on('render', this.afterRender);
            $(this.el).empty();
            content.setTitle('Facebook');
            content.hideSubTitle();
            content.hideRightButton();
            content.hideFeedTagMenu();
            content.hidePlaceTagMenu();
            this.render();
        },

        // Renders all of the Category models on the UI
        render: function() {
            $(this.el).append('<div id="fbTag0"></div>');
            this.loadByTag(config.fbTags[0], '#fbTag0');
            $(this.el).append('<div id="fbTag1"></div>');
            this.loadByTag(config.fbTags[1],'#fbTag1');
        },

        loadByTag: function (fbTag,elToAppend) {
            var self = this;
            var tag = 'Facebook';
            $.getJSON('http://'+config.url+'/feeds?tag=' + tag + '&fbTag=' + fbTag + '&callback=?', function (feeds) {
                var items = [];
                items.push('<li data-role="list-divider" role="heading" data-theme="a">'+ fbTag + '</li>');
                $.each(feeds, function (key, feed) {
                    items.push('<li class="feed-button" id="feed-' + feed.id + '"><a class="setSubTitle" data-id="' + feed.id + '" data-title="' + feed.title + '"  href="#facebook/' + feed.id + '">' + feed.title + '</a></li>');
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
    return FacebookFeedOrderByFbTagListView;

});