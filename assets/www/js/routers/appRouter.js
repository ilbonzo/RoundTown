define([
    'jquery',
    'backbone',
    'feedView',
    'feedListView',
    'feedOrderByTagListView',
    'galleryView',
    'historyView',
    'homeView',
    'placeView',
    'placeImagesView',
    'placeListView',
    'placeMapView',
    'tweetListView'
    ], function(
        $,
        Backbone,
        FeedView,
        FeedListView,
        FeedOrderByTagListView,
        GalleryView,
        HistoryView,
        HomeView,
        PlaceView,
        PlaceImagesView,
        PlaceListView,
        PlaceMapView,
        TweetListView) {

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
            'feedlist/:tag': 'feedlistbytag',
            'feedorderbytaglist': 'feedorderbytaglist',
            'history': 'history',
            'gallery': 'gallery',
            'map/:lat/:lng/:address': 'placemap',
            'place/:id': 'place',
            'place/:id/images': 'placeimages',
            'placelist': 'placelist',
            'placelist/:tag': 'placelisttag',
            'tweetlist': 'tweetlist'
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

        feedlistbytag: function(tag) {
            $.mobile.loading('show');
            var feedlist = new FeedListView({'tag': tag});
        },

        feedorderbytaglist: function() {
            $.mobile.loading('show');
            var feedlist = new FeedOrderByTagListView();
        },

        history: function() {
            $.mobile.loading('show');
            var history = new HistoryView();
        },

        gallery: function() {
            $.mobile.loading('show');
            var gallery = new GalleryView();
        },

        place: function(id) {
            $.mobile.loading('show');
            var place = new PlaceView({placeId: id});
        },

        placeimages: function(id) {
            $.mobile.loading('show');
            var placeimage = new PlaceImagesView({placeId: id});
        },

        placelist: function() {
            $.mobile.loading('show');
            var placelist = new PlaceListView();
        },

        placelisttag: function(tag) {
            $.mobile.loading('show');
            var placelist = new PlaceListView({'tag': tag});
        },

        placemap: function(lat, lng, address) {
            $.mobile.loading('show');
            var placemap = new PlaceMapView({placeLat: lat, placeLng: lng, placeAddress: address});
        },

        tweetlist: function() {
            $.mobile.loading('show');
            var tweetlist = new TweetListView();
        }

    });

    // Returns the Router class
    return AppRouter;

});