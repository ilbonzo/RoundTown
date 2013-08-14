define(['jquery','underscore', 'backbone', 'config', 'tweetModel'], function($, _, Backbone, config, Tweet) {

    var TweetsCollection = Backbone.Collection.extend({
        model: Tweet,
        url: 'http://' + config.url + '/tweets',

        sync: function(method, model, options){
            options.dataType = 'jsonp';
            return Backbone.sync(method, model, options);
        }

    });

    return TweetsCollection;

});