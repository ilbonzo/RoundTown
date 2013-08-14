define(['jquery', 'content'], function($, content) {
        return {
            start: function () {
                //register event
                $(document).on('click', '#panel-nav a', function () {
                    $('#panel-nav').panel('close');
                });

                $(document).on('click', '#sec-panel-nav a', function () {
                    $('#sec-panel-nav').panel('close');
                });

                $(document).on('click', '.setTitle', function () {
                    content.setTitle($(this).data('title'));
                });

                $(document).on('click', '.setSubTitle', function () {
                    content.setSubTitle($(this).data('title'));
                });

                $(document).on('click', '#backButton a', function (e) {
                    e.preventDefault();
                    history.back();
                });

                content.loadFeedTag();

                content.loadPlaceTag();

            }
        }
    }
);


