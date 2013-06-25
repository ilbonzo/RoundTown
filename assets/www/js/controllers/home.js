define(['config', 'feed'], function(config, feed) {
    return {
        load: function () {
            $content = $('#content');
            $content.append('<div id="tag0"></div>');
            feed.loadByTag(config.tags[0], '#tag0');
            $content.append('<div id="tag1"></div>');
            feed.loadByTag(config.tags[1],'#tag1');
            $content.append('<div id="tag2"></div>');
            feed.loadByTag(config.tags[2],'#tag2');
        }
    }
});
