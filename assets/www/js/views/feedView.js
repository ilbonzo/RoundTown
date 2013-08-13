define(['jquery', 'underscore', 'backbone', 'config', 'content' ], function($, _, Backbone, config, content) {

    // Extends Backbone.Viewi
    var FeedView = Backbone.View.extend( {

        el: '#content',

        tagName: 'ul',
        className: 'feeds',
        id: 'feedView',


        // The View Constructor
        initialize: function(options) {
            this.on('render', this.afterRender);
            this.$el.empty();
            this.render(options);
        },

        // Renders all of the Category models on the UI
        render: function(options) {
            this.trigger('render');
            this.get(options.feedId);
        },

        get: function (id) {
            $.jsonp({
                url: 'http://'+config.url+'/feeds/' + id + '?callback=?',
                success: function (news) {
                    var items = [];
                    $.each(news, function (key, n) {
                        /*jshint multistr: true */
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
                },

                error: function (jqXHR, textStatus, errorThrown) {
                    $.mobile.showPageLoadingMsg( $.mobile.pageLoadErrorMessageTheme, 'Feed non disponibile', true );
                    setTimeout( function () {
                        window.appRouter.navigate('feedlist', {trigger: true});
                    },2000);

                }
            });
        },

        afterRender: function() {
            $.mobile.loading('hide');
        }

    });

    // Returns the View class
    return FeedView;

});