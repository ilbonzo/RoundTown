define(['underscore', 'backbone'], function(_, Backbone) {

    var Feed = Backbone.Model.extend({
        defaults: {
            id: '',
            title: '',
            url: '',
            tag: ''
        },

    });

    // Returns the Model class
    return Feed;

});