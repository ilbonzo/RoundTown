define(['config'], function(config) {
    return {
        load: function () {
            $content = $('#content');
            $content.append('<div id="swipeGallery">SWIPE</div>');
        }
    }
});