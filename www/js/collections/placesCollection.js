define(['jquery','underscore', 'backbone', 'config', 'placeModel'], function($, _, Backbone, config, Place) {

    var PlacesCollection = Backbone.Collection.extend({
        model: Place,
        url: 'http://' + config.url + '/places',

        sync: function(method, model, options){
            options.dataType = 'jsonp';
            return Backbone.sync(method, model, options);
        }

    });

    return PlacesCollection;

});