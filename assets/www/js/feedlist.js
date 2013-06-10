//document.addEventListener("deviceready", onDeviceReady, false);
$(document).ready(onSystemReady);
function onSystemReady() {

    // is equal to true if a browser can create an XMLHttpRequest object and if that XMLHttpRequest object has a withCredentials property. To enable cross-domain requests in environments that do not support cors yet but do allow cross-domain XHR requests (windows gadget, etc), set $.support.cors = true;.
    $.support.cors = true;
    loadFeed();
    loadHistory();
}

function loadFeed() {
    $.getJSON('http://'+url+'/api/feeds?callback=?', function (feeds) {
        //@DEBUG
        console.log('start');
        var items = [];

        $.each(feeds, function (key, feed) {
            //@DEBUG
            console.log(feed);
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
