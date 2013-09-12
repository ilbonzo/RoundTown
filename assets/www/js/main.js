require.config({

    shim: {
        'jquery': {
            'exports': 'jQuery'
        },
        'jqueryjsonp': {
            'deps': [ 'jquery' ]
        },
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': [ 'underscore', 'jquery' ],
            'exports': 'Backbone'
        },
        'jquerymobile': {
            'deps': [ 'jquery' ]
        },
        'photoswipe': {
            'deps': [ 'klass' ]
        }
    },

    paths: {
        //config
        'config': 'config/config',

        //libs
        'jquery': 'libs/jquery-1.9.1',
        'jqueryjsonp': 'libs/jquery.jsonp',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'jquerymobile': 'libs/jquery.mobile-1.3.2',
        'klass': 'libs/klass.min',
        'photoswipe': 'libs/code.photoswipe.jquery-3.0.5',

        //routers
        'appRouter': 'routers/appRouter',

        //controllers
        'weather': 'controllers/weather',

        //views
        'feedView': 'views/feedView',
        'feedListView': 'views/feedListView',
        'feedOrderByTagListView': 'views/feedOrderByTagListView',
        'galleryView': 'views/galleryView',
        'historyView': 'views/historyView',
        'homeView': 'views/homeView',
        'placeView': 'views/placeView',
        'placeImagesView': 'views/placeImagesView',
        'placeListView': 'views/placeListView',
        'tweetListView': 'views/tweetListView',

        //models
        'feedModel': 'models/feedModel',
        'newsModel': 'models/newsModel',
        'placeModel': 'models/placeModel',
        'tweetModel': 'models/tweetModel',

        //collections
        'feedsCollection': 'collections/feedsCollection',
        'placesCollection': 'collections/placesCollection',
        'tweetsCollection': 'collections/tweetsCollection',

        //helpers
        'content': 'helpers/content'

     }
});

require([ 'jquery', 'jqueryjsonp', 'underscore', 'backbone', 'appRouter' ], function( $, jqueryjsonp, _, Backbone, AppRouter ) {

    $( document ).on( 'mobileinit',
        // Set up the "mobileinit" handler before requiring jQuery Mobile's module
        function() {
            // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
            $.mobile.linkBindingEnabled = false;

            // Disabling this will prevent jQuery Mobile from handling hash changes
            $.mobile.hashListeningEnabled = false;

            //disable ui button
            $.mobile.activeBtnClass = 'unused';
        }
    )

    require( ['jquerymobile'], function() {
        // Instantiates a new Backbone.js Mobile Router
        // this.router = new AppRouter();
        window.appRouter = new AppRouter();
    });

    require(['app','photoswipe']);
});


