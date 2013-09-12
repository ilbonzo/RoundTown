define(['jquery', 'underscore', 'backbone', 'config', 'content', 'placeModel', 'text!../templates/place/place.html'], function($, _, Backbone, config, content, PlaceModel, PlaceTemplate) {

    // Extends Backbone.Viewi
    var PlaceView = Backbone.View.extend( {

        el: '#content',

        placeTemplate: _.template(PlaceTemplate),

        // The View Constructor
        initialize: function(options) {
            window.scrollTo(0, 0);
            content.hideSubTitle();
            content.showRightButton();
            content.hideFeedTagMenu();
            content.showPlaceTagMenu();
            this.on('render', this.afterRender);
            this.model = new PlaceModel({id: options.placeId});
            this.model.on('sync', this.render, this);
            this.model.fetch();
        },

        // Renders all of the Category models on the UI
        render: function() {
            place= this.model.toJSON();
            this.$el.html(this.placeTemplate({
                place: place
            }));
            $('ul.dynamic').listview();
            this.trigger('render');

        },

        afterRender: function() {
            $.mobile.loading('hide');
        },

    });

    // Returns the View class
    return PlaceView;

});