define(['jquery', 'underscore', 'backbone', 'config', 'content' ], function($, _, Backbone, config, content) {

    // Extends Backbone.Viewi
    var FeedView = Backbone.View.extend( {

        //my param
        //feedId: '',

        // Cache the template function for a single item.
        feedTemplate: _.template('Feed Template Start'),

        //el: $('#content'),
        tagName: 'ul',
        className: 'feeds',
        id: 'feedView',


        // The View Constructor
        initialize: function() {
            //this.on('render', this.afterRender);
            $('#content').empty();
            console.log('in feedview' + this.feedId);
            console.log(this.el);
            //this.render();
        },

        // Renders all of the Category models on the UI
        render: function() {
            //this.trigger('render');
            content.setTitle('');
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
        },

    });

    // Returns the View class
    return FeedView;

});