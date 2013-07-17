
// Mobile Router
// =============

// Includes file dependencies
define([
    'jquery',
    'backbone',
    'homeView'
    ],
    function( $, Backbone, HomeView ) {

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
            'news': 'news'
        },

        // Home method
        home: function() {
            $.mobile.loading('show');
            var home = new HomeView();
            home.render();
            $.mobile.loading('hide');
        },

        news: function() {
            $.mobile.loading('show');
            console.log('News');
            $.mobile.loading('hide');
        }

    });

    // Returns the Router class
    return AppRouter;

});