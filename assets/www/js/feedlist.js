//document.addEventListener("deviceready", onDeviceReady, false);
$(document).ready(onSystemReady);
function onSystemReady() {

    // is equal to true if a browser can create an XMLHttpRequest object and if that XMLHttpRequest object has a withCredentials property. To enable cross-domain requests in environments that do not support cors yet but do allow cross-domain XHR requests (windows gadget, etc), set $.support.cors = true;.
    $.support.cors = true;

    vars = getUrlVars();

    $.getJSON("http://"+url+"/api/town/"+vars['id'], function (data) {
        var items = [];

        $.each(data.feeds, function (key, feed) {
            items.push('<li class="feed-button" id="town' + feed._id.$id + '"><a href="feed.html">' + feed.name + '</a></li>');
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