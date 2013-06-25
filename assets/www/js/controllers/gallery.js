define(['config'], function(config) {
    return {
        load: function () {
            $content = $('#content');
            $.getJSON('http://'+config.url+'/api/images?callback=?', function (photos) {
                var items = [];
                $.each(photos, function (key, image) {
                    items.push('<li><a href="' + image.url + '"  rel="external"><img src="' + image.url_thumb + '" alt="' + image.user + '"/></a></li>');
                });
                $('<ul/>', {
                    'class' : 'gallery dynamic photoItem',
                    html: items.join('')
                }).appendTo('#content');

                $('.gallery a').photoSwipe({
                    enableMouseWheel: true,
                    enableKeyboard: true
                });

            });
        }
    }
});