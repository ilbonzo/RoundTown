define([], function() {
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
        showSubTitle: function() {
            $('#subTitle').show();
        },
        hideSubTitle: function () {
            $('#subTitle').html('');
            $('#subTitle').hide();
        }
    }
});
