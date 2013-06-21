require.config({
     paths: {
        //config
        'config': 'config/config',

        //libs
        'jquery': 'libs/jquery-1.9.1',
        'jquerymobile': 'libs/jquery.mobile-1.3.1',
        'klass': 'libs/klass.min',
        'photoswipe': 'libs/code.photoswipe.jquery-3.0.5',

        //controllers
        'feed': 'controllers/feed',
        'gallery': 'controllers/gallery',
        'history': 'controllers/history',
        'home': 'controllers/home',
        'weather': 'controllers/weather',

        //helpers
        'content': 'helpers/content'

     }
});

require(['init']);