define(['config'], function(config) {
    return {
        load: function () {
            $('#content').html('\
                <a  data-role="button" data-inline="true" href="mailto:sanzvan@magni.me">Scrivici</a>\
                ').trigger('create');
        }
    }
});
