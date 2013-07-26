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
            console.log('Feed' + id);
            var feed = new FeedView({feedId: 'IDIDDIID'});
            console.log(feed.feedId);
            console.log(feed.el);

        },

        feedlist: function() {
            $.mobile.loading('show');
            console.log('FeedList');
            var feedlist = new FeedListView();
        },

        history: function() {
            $.mobile.loading('show');
            console.log('History');
            var history = new HistoryView();
        },

        gallery: function() {
            $.mobile.loading('show');
            console.log('gallery');
            var gallery = new GalleryView();
        }

    });

    // Returns the Router class
    return AppRouter;

});