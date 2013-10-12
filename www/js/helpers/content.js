define(['config'], function(config) {
    return {

        removeAll: function () {
            $('#content').empty();
        },

        setTitle: function (title) {
            if (typeof title === 'undefined') {
                title = 'San Zvan';
            }
            $('#title').html(title);
        },

        setSubTitle: function (subTitle) {
            $('#subTitle').html(subTitle);
        },

        getSubTitle: function () {
            return $('#subTitle').html();
        },

        showSubTitle: function() {
            $('#subTitle').show();
        },

        hideSubTitle: function () {
            $('#subTitle').html('');
            $('#subTitle').hide();
        },

        loadFeedTag: function () {
            var items = [];
            items.push('<li data-role="list-divider" role="heading" data-theme="a">News</li>');
            $.each(config.tags, function(key, tag) {
                items.push('<li><a class="setSubTitle" data-title="' + tag + '"  href="#feedlist/' + tag + '">' + tag + '</a></li>');
            });
            $('<ul/>', {
                'id': 'feedTagMenu',
                'data-role' : 'listview',
                'class' : 'dynamic',
                'style': 'display:none',
                 html: items.join('')
            }).appendTo('#sec-panel-nav');
        },

        showFeedTagMenu: function () {
            $('#feedTagMenu').show();
        },

        hideFeedTagMenu: function () {
            $('#feedTagMenu').hide();
        },

        // closeSecPanel: function () {
        //     $( "#sec-panel-nav" ).panel( "close" );
        // },

        hideRightButton: function () {
            $('#right-button').hide();
        },

        showRightButton: function () {
            $('#right-button').show();
        },

        loadPlaceTag: function () {
            var items = [];
            items.push('<li data-role="list-divider" role="heading" data-theme="a">Luoghi</li>');
            $.each(config.foursquareCategories, function(key, tag) {
                items.push('<li><a class="setSubTitle" data-title="' + tag.name + '"  href="#placelist/' + tag.id + '">' + tag.name + '</a></li>');
            });
            $('<ul/>', {
                'id': 'placeTagMenu',
                'data-role' : 'listview',
                'class' : 'dynamic',
                'style': 'display:none',
                 html: items.join('')
            }).appendTo('#sec-panel-nav');
        },

        showPlaceTagMenu: function () {
            $('#placeTagMenu').show();
        },

        hidePlaceTagMenu: function () {
            $('#placeTagMenu').hide();
        }

    }
});
