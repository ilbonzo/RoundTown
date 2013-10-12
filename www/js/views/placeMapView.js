define(['jquery', 'underscore', 'backbone', 'config', 'content' ], function($, _, Backbone, config, content) {
    // Extends Backbone.View
    var PlaceMapView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function(options) {
            window.scrollTo(0, 0);
            this.on('render', this.afterRender);
            $(this.el).empty();
            content.setTitle('Mappa');
            content.showSubTitle();
            content.showRightButton();
            content.hideFeedTagMenu();
            content.showPlaceTagMenu();
            this.render(options.placeLat, options.placeLng, options.placeAddress);
        },

        render: function(lat, lng, address) {
            $('#content').append('<div class="ui-bar-c ui-corner-all ui-shadow" style="padding:1em;"><div id="map_canvas"></div></div>');

            $('#map_canvas').height($(window).height() - 210);

            function initialize() {
              var myLatlng = new google.maps.LatLng(lat, lng, address);
              var mapOptions = {
                zoom: 14,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              }

              var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

              var contentString = address;

              var infowindow = new google.maps.InfoWindow({
                  content: '<div style="height:80px"><strong>' + content.getSubTitle() + '</strong><br/>' + contentString + '</div>'
              });

              var marker = new google.maps.Marker({
                  position: myLatlng,
                  map: map,
                  title: content.getSubTitle()
              });

              google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
              });
              infowindow.open(map,marker);
            }

            initialize();

            this.trigger('render');
        },

        afterRender: function() {
            $.mobile.loading('hide');
        }

    });
    // Returns the View class
    return PlaceMapView;

});