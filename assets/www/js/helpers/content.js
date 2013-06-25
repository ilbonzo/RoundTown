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
        }
    }
});
