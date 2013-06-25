define(['config'], function(config) {
    return {
        load: function () {
            var wikipediaHTMLResult = function(data) {
                $('#content').append(data.parse.text["*"]);
            };
            $.getJSON('http://it.wikipedia.org/w/api.php?action=parse&format=json&callback=?', {page:config.wikipedia, prop:'text|images', uselang:'it'}, wikipediaHTMLResult);
        }
    }
});
