
function loadHistory() {
    pageName = 'San_Giovanni_in_Persiceto';
    var html = $.getJSON("http://it.wikipedia.org/w/api.php?action=parse&amp;format=json&amp;callback=?", {page:pageName, prop:"text"});

    $('<div/>', {
        html: html
    }).appendTo('#content');
}

