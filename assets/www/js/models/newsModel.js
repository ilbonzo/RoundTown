define(['underscore', 'backbone'], function(_, Backbone) {

    var News = Backbone.Model.extend({
        defaults: {
            title: '',
            description: ''
        },
        initialize: function(){
            console.log('initialize NewsModel');
        }
    });

    // Returns the Model class
    return News;

});