define(['jquery', 'underscore', 'backbone', 'config', 'content', 'jqueryuimap' ], function($, _, Backbone, config, content, jqueryuimap) {
    // Extends Backbone.View
    var PlaceMapView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function(options) {
            window.scrollTo(0, 0);
            this.on('render', this.afterRender);
            $(this.el).empty();
            content.setTitle('Mappa');
            content.hideSubTitle();
            content.showRightButton();
            content.hideFeedTagMenu();
            content.showPlaceTagMenu();
            this.render(options.placeLat, options.placeLng);
        },

        // Renders all of the Category models on the UI
        render: function(lat, lng) {
            $('#content').append('<div id="map_canvas">' + 'MAP' + lat + ' ' + lng + '</div>');

            // @TODO jquery ui map method
             $(function() {
                var latlng = new google.maps.LatLng(config.latitude, config.longitude);
                $('#map_canvas').gmap({'center': latlng, zoom: 14, 'callback': function () {
                        $('#map_canvas').gmap('addMarker', {'position': latlng, 'title': 'Hello world!'});
                    }
                });
            });

            // @TODO semple method
            // var center;
            // var map = null;

            // function Newinitialize(lat,lng) {
            //     center = new google.maps.LatLng(lat,lng);
            //     var myOptions = {
            //         zoom: 14,
            //         center: center,
            //         mapTypeId: google.maps.MapTypeId.SATELLITE
            //     }
            //     map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

            //     }

            // function detectBrowser() {
            //     var useragent = navigator.userAgent;
            //     var mapdivMap = document.getElementById("map_canvas");

            //     if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
            //         mapdivMap.style.width = '100%';
            //         mapdivMap.style.height = '100%';
            //         document.getElementById("container").style.width = '100%';
            //         document.getElementById("container").style.height = '100%';
            //         document.getElementById("index").style.height = '100%';
            //         document.getElementById("index").style.height = '100%';
            //     } else {
            //         mapdivMap.style.width = '600px';
            //         mapdivMap.style.height = '800px';
            //     }
            // };

            // $('.goMap').on('click', function() {
            // if(navigator.geolocation) {
            // detectBrowser();
            // navigator.geolocation.getCurrentPosition(function(position){
            // Newinitialize(position.coords.latitude,position.coords.longitude);
            // });
            // }else{
            // detectBrowser();
            // Newinitialize(52.636161,-1.133065);
            // }
            // });
            this.trigger('render');
        },

        afterRender: function() {
            $.mobile.loading('hide');
        }

    });
    // Returns the View class
    return PlaceMapView;

});