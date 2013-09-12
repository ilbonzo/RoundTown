define(['jquery', 'underscore', 'backbone', 'config', 'content', 'feedModel', 'feedsCollection' ], function($, _, Backbone, config, content, Feed, FeedsCollection) {

    // Extends Backbone.Viewi
    var HomeView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function() {
            window.scrollTo(0, 0);
            this.on('render', this.afterRender);
            $(this.el).empty();
            content.setTitle();
            content.hideSubTitle();
            content.showRightButton();
            content.showFeedTagMenu();
            content.hidePlaceTagMenu();
            this.render();
        },

        // Renders all of the Category models on the UI
        render: function() {
            var items = [];
            /*jshint multistr: true */
            items.push('<li><a href="#feedorderbytaglist">\
                <img src="img/icons/news.png">\
                <h2>News</h2>\
                <p>Le ultime notizie su San Giovanni</p>\
                </a></li>');
            items.push('<li><a href="#placelist">\
                <img src="img/icons/places.png">\
                <h2>Luoghi</h2>\
                <p>Scopri i luoghi di Persiceto</p>\
                </a></li>');
            items.push('<li><a href="#tweetlist">\
                <img src="img/icons/twitter.png">\
                <h2>Tweets</h2>\
                <p>Ultimi tweet da San Giovanni</p>\
                </a></li>');
            items.push('<li><a href="#images">\
                <img src="img/icons/images.png">\
                <h2>Immagini</h2>\
                <p>Foto di San Giovanni</p>\
                </a></li>');
            items.push('<li><a href="#history">\
                <img src="img/icons/history.png">\
                <h2>Storia</h2>\
                <p>Il passato e il presente di Persiceto</p>\
                </a></li>');

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
    return HomeView;

});