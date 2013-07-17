// Home View
// =============

// Includes file dependencies
define([ "jquery", "backbone"], function( $, Backbone ) {

    // Extends Backbone.View
    var HomeView = Backbone.View.extend( {

        // The View Constructor
        initialize: function() {
            console.log('initialize Home View');
        },

        // Renders all of the Category models on the UI
        render: function() {
            console.log('render Home View');
            return this;
        }

    });

    // Returns the View class
    return HomeView;

});