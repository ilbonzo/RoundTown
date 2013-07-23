define([
    'jquery',
    'backbone',
    'feedView',
    'historyView',
    'homeView'
    ], function(
        $,
        Backbone,
        FeedView,
        HistoryView,
        HomeView) {

        // Extends Backbone.Router
        var AppRouter = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();
        },

        // Backbone.js Routes
        routes: {
            // When there is no hash bang on the url, the home method is called
            '': 'home',
            'feed': 'feed',
            'news?:id': 'news',
            'history': 'history',
            'gallery': 'gallery'
        },

        // Home method
        home: function() {
            $.mobile.loading('show');
            var home = new HomeView();
            $.mobile.loading('hide');
        },

        feed: function() {
            $.mobile.loading('show');
            console.log('Feed');
            var feed = new FeedView();
            $.mobile.loading('hide');
        },

        news: function(id) {
            $.mobile.loading('show');
            console.log('News ' + id);
            $.mobile.loading('hide');
        },

        history: function() {
            $.mobile.loading('show');
            console.log('History');
            var history = new HistoryView();
            $.mobile.loading('hide');

        },

        gallery: function() {

        }

    });

    // Returns the Router class
    return AppRouter;

});