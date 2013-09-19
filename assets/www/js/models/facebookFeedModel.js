define(['underscore', 'backbone'], function(_, Backbone) {

    var FacebookFeed = Backbone.Model.extend({
        defaults: {
            id: '',
            title: '',
            url: '',
            tag: ''
        }
    });

    // Returns the Model class
    return FacebookFeed;

});