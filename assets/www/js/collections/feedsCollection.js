define(['jquery','underscore', 'backbone', 'config', 'feedModel'], function($, _, Backbone, config, Feed) {

    var FeedsCollection = Backbone.Collection.extend({
        model: Feed,
        url: 'http://' + config.url + '/feeds',

        sync: function(method, model, options){
            options.dataType = 'jsonp';
            return Backbone.sync(method, model, options);
        }

    });

    return FeedsCollection;

});


