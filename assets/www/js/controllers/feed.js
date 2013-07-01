define(['config'], function(config) {
    return {
        loadByTag: function (tag,elToAppend) {
            $.getJSON('http://'+config.url+'/api/feeds?tag=' + tag + '&callback=?', function (feeds) {
                var items = [];
                items.push('<li data-role="list-divider" role="heading" data-theme="d">'+ tag + '</li>');
                $.each(feeds, function (key, feed) {
                    items.push('<li class="feed-button" id="feed-' + feed._id.$id + '"><a data-id="' + feed._id.$id + '" href="#">' + feed.title + '</a></li>');
                });
                $('<ul/>', {
                    'data-role' : 'listview',
                    'data-inset' : 'true',
                    'class' : 'dynamic newsTag',
                     html: items.join('')
                }).appendTo(elToAppend);
                $('ul.dynamic').listview();
            });
        },
        get: function (id) {
            $.getJSON('http://'+config.url+'/api/feeds/' + id + '?callback=?', function (news) {
                var items = [];
                $.each(news, function (key, n) {
                    items.push('<div data-role="collapsible"  data-collapsed="true" class="news-button">\
                        <h3 class="ui-collapsible-heading">' + n.title + '</h3>\
                        <time>' + n.date + '</time>\
                        <p>' + n.description + '</p>\
                        <footer><a href="' + n.link +'">fonte</a> | <author>' + n.author + '</author></footer>\
                        </div>');
                });
                $('<div/>', {
                    'data-role' : 'collapsible-set',
                    'data-content-theme' : 'd',
                    'class' : 'dynamic newsItem',
                    html: items.join('')
                }).appendTo('#content');
                $('#content').find(":jqmData(role=collapsible)").collapsible();
            });
        }
    }
});
