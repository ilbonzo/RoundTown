define(['jquery','underscore', 'backbone', 'config', 'facebookFeedModel'], function($, _, Backbone, config, FacebookFeed) {

    var FacebookFeedsCollection = Backbone.Collection.extend({
        model: FacebookFeed,
        url: 'http://' + config.url + '/feeds?tag=Facebook',

        sync: function(method, model, options){
            options.dataType = 'jsonp';
            return Backbone.sync(method, model, options);
        }

    });

    return FacebookFeedsCollection;

});


