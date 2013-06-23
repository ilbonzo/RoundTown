define(['config'], function(config) {
    return {
        load: function () {
            $content = $('#content');
            $content.append('<div id="swipeGallery">\
            <ul class="gallery">\
                <li><a href="http://www.photoswipe.com/latest/examples/images/full/001.jpg" rel="external"><img src="http://www.photoswipe.com/latest/examples/images/thumb/001.jpg" alt="Image 001" /></a></li>\
                <li><a href="http://www.photoswipe.com/latest/examples/images/full/002.jpg" rel="external"><img src="http://www.photoswipe.com/latest/examples/images/thumb/002.jpg" alt="Image 002" /></a></li>\
                <li><a href="http://www.photoswipe.com/latest/examples/images/full/003.jpg" rel="external"><img src="http://www.photoswipe.com/latest/examples/images/thumb/003.jpg" alt="Image 003" /></a></li>\
                <li><a href="http://www.photoswipe.com/latest/examples/images/full/004.jpg" rel="external"><img src="http://www.photoswipe.com/latest/examples/images/thumb/004.jpg" alt="Image 004" /></a></li>\
                <li><a href="http://www.photoswipe.com/latest/examples/images/full/005.jpg" rel="external"><img src="http://www.photoswipe.com/latest/examples/images/thumb/005.jpg" alt="Image 005" /></a></li>\
                <li><a href="http://www.photoswipe.com/latest/examples/images/full/006.jpg" rel="external"><img src="http://www.photoswipe.com/latest/examples/images/thumb/006.jpg" alt="Image 006" /></a></li>\
                <li><a href="http://www.photoswipe.com/latest/examples/images/full/007.jpg" rel="external"><img src="http://www.photoswipe.com/latest/examples/images/thumb/007.jpg" alt="Image 007" /></a></li>\
                <li><a href="http://www.photoswipe.com/latest/examples/images/full/008.jpg" rel="external"><img src="http://www.photoswipe.com/latest/examples/images/thumb/008.jpg" alt="Image 008" /></a></li>\
                <li><a href="http://www.photoswipe.com/latest/examples/images/full/009.jpg" rel="external"><img src="http://www.photoswipe.com/latest/examples/images/thumb/009.jpg" alt="Image 009" /></a></li>\
            </ul>\
            </div>');
        }
    }
});