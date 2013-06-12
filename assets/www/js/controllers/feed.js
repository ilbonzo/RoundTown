define(['config'], function(config) {
    return {
        load: function () {
            $.getJSON('http://'+config.url+'/api/feeds?callback=?', function (feeds) {
                var items = [];
                $.each(feeds, function (key, feed) {
                    items.push('<li class="feed-button" id="town' + feed._id.$id + '"><a href="#">' + feed.title + '</a></li>');
                });
                $('<ul/>', {
                    'data-role' : 'listview',
                    'data-inset' : 'true',
                    'class' : 'dynamic',
                    html: items.join('')
                }).appendTo('#content');
                $('ul.dynamic').listview();
            });
        }
    }
});
