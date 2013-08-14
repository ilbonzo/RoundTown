define(['underscore', 'backbone'], function(_, Backbone) {

    var News = Backbone.Model.extend({
        defaults: {
            title: '',
            description: '',
            url: ''
        },
        initialize: function(){
            //
        }
    });

    // Returns the Model class
    return News;

});