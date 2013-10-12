define(['underscore', 'backbone', 'config'], function(_, Backbone, config) {

    var Tweet = Backbone.Model.extend({
        defaults: {
            id: '',
            text: '',
            user: 'N/D',
            url: 'N/D'
        },

        sync: function(method, model, options){
            options.dataType = 'jsonp';
            return Backbone.sync(method, model, options);
        }
    });

    // Returns the Model class
    return Tweet;

});