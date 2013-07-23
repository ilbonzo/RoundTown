define(['jquery'], function($) {
        return {
            start: function () {
                //register event
                $('#panel-nav a').on('click', function () {
                    $('#panel-nav').panel('close');
                });
            }
        }
    }
);


