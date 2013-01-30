//document.addEventListener("deviceready", onDeviceReady, false);
$(document).ready(onSystemReady);
function onSystemReady() {

    // is equal to true if a browser can create an XMLHttpRequest object and if that XMLHttpRequest object has a withCredentials property. To enable cross-domain requests in environments that do not support cors yet but do allow cross-domain XHR requests (windows gadget, etc), set $.support.cors = true;.
    $.support.cors = true;

    $.getJSON('http://'+url+'/api/towns?callback=?', function (data) {
        var items = [];

        $.each(data.towns, function (key, town) {
            items.push('<li class="town-button" id="town' + town._id.$id + '"><a href="town.html?id='+ town._id.$id +'">' + town.name + '</a></li>');
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
