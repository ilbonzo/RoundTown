define(['jquery', 'underscore', 'backbone', 'config', 'content', 'feedModel', 'feedsCollection' ], function($, _, Backbone, config, content, Feed, FeedsCollection) {

    // Extends Backbone.Viewi
    var HomeView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function() {
            $(this.el).empty();
            content.setTitle();
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
        },


        //Old method
        loadByTag: function (tag,elToAppend) {
            $.getJSON('http://'+config.url+'/feeds?tag=' + tag + '&callback=?', function (feeds) {
                var items = [];
                items.push('<li data-role="list-divider" role="heading" data-theme="d">'+ tag + '</li>');
                $.each(feeds, function (key, feed) {
                    items.push('<li class="feed-button" id="feed-' + feed.id + '"><a data-id="' + feed.id + '" href="#">' + feed.title + '</a></li>');
                });
                $('<ul/>', {
                    'data-role' : 'listview',
                    'data-inset' : 'true',
                    'class' : 'dynamic newsTag',
                     html: items.join('')
                }).appendTo(elToAppend);
                $('ul.dynamic').listview();
            });
        },

        get: function (id) {
            $.getJSON('http://'+config.url+'/feeds/' + id + '?callback=?', function (news) {
                var items = [];
                $.each(news, function (key, n) {
                    items.push('<div data-role="collapsible"  data-collapsed="true" class="news-button">\
                        <h3 class="ui-collapsible-heading">' + n.title + '</h3>\
                        <time>' + n.date + '</time>\
                        <p>' + n.description + '</p>\
                        <footer><a href="' + n.link +'">fonte</a> | <author>' + n.author + '</author></footer>\
                        </div>');
                });
                $('<div/>', {
                    'data-role' : 'collapsible-set',
                    'data-content-theme' : 'd',
                    'class' : 'dynamic newsItem',
                    html: items.join('')
                }).appendTo('#content');
                $('#content').find(":jqmData(role=collapsible)").collapsible();
            });
        }

    });

    // Returns the View class
    return HomeView;

});