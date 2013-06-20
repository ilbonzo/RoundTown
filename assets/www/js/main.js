require.config({
     paths: {
        //config
        'config': 'config/config',

        //libs
        'jquery': 'libs/jquery-1.9.1',
        'jquerymobile': 'libs/jquery.mobile-1.3.1',

        //controllers
        'feed': 'controllers/feed',
        'history': 'controllers/history',
        'weather': 'controllers/weather',

        //helpers
        'content': 'helpers/content'

     }
});

require(['init']);