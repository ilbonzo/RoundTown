define([
    'jquery',
    'backbone',
    'feedView',
    'feedListView',
    'galleryView',
    'historyView',
    'homeView'
    ], function(
        $,
        Backbone,
        FeedView,
        FeedListView,
        GalleryView,
        HistoryView,
        HomeView) {

        // Extends Backbone.Router
        var AppRouter = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();
            $('#startOverlay').remove();
        },

        // Backbone.js Routes
        routes: {
            // When there is no hash bang on the url, the home method is called
            '': 'home',
            'feed/:id': 'feed',
            'feedlist': 'feedlist',
            'history': 'history',
            'gallery': 'gallery'
        },

        // Home method
        home: function() {
            $.mobile.loading('show');
            var home = new HomeView();
        },

        feed: function(id) {
            $.mobile.loading('show');
            var feed = new FeedView({feedId: id});
        },

        feedlist: function() {
            $.mobile.loading('show');
            var feedlist = new FeedListView();
        },

        history: function() {
            $.mobile.loading('show');
            var history = new HistoryView();
        },

        gallery: function() {
            $.mobile.loading('show');
            var gallery = new GalleryView();
        }

    });

    // Returns the Router class
    return AppRouter;

});