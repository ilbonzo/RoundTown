define(['underscore', 'backbone', 'config'], function(_, Backbone, config) {

    var Place = Backbone.Model.extend({
        defaults: {
            id: '',
            name: '',
            address: 'N/D',
            lat: 'N/D',
            lng: 'N/D',
            phone: 'N/D',
            twitter: 'N/D',
            url: 'N/D',
            foursquare: '',
            icon:'',
            categories: [],
            tips: []
        },
        urlRoot : 'http://' + config.url + '/places',

        sync: function(method, model, options){
            options.dataType = 'jsonp';
            return Backbone.sync(method, model, options);
        }
    });

    // Returns the Model class
    return Place;

});