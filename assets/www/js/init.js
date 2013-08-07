define(['jquery', 'content'], function($, content) {
        return {
            start: function () {
                //register event
                $('#panel-nav a').on('click', function () {
                    $('#panel-nav').panel('close');
                });

                $(document).on('click', '.setTitle', function () {
                    content.setTitle($(this).data('title'));
                });
            }
        }
    }
);


