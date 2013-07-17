require.config({

    shim: {
        'jquery': {
            'exports': 'jQuery'
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
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'jquerymobile': 'libs/jquery.mobile-1.3.1',
        'klass': 'libs/klass.min',
        'photoswipe': 'libs/code.photoswipe.jquery-3.0.5',

        //routers
        'appRouter': 'routers/appRouter',

        //controllers
        'feed': 'controllers/feed',
        'contact': 'controllers/contact',
        'gallery': 'controllers/gallery',
        'history': 'controllers/history',
        'home': 'controllers/home',
        'weather': 'controllers/weather',

        //views
        'homeView': 'views/homeView',

        //helpers
        'content': 'helpers/content'

     }
});

require([ 'jquery', 'backbone', 'appRouter' ], function( $, Backbone, AppRouter ) {

    $( document ).on( 'mobileinit',
        // Set up the "mobileinit" handler before requiring jQuery Mobile's module
        function() {
            // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
            $.mobile.linkBindingEnabled = false;

            // Disabling this will prevent jQuery Mobile from handling hash changes
            $.mobile.hashListeningEnabled = false;
        }
    )

    require( ['jquerymobile'], function() {
        // Instantiates a new Backbone.js Mobile Router
        this.router = new AppRouter();
    });

    require(['app','photoswipe']);
});


