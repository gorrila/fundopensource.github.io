$.getJSON('/data/distros.json', function (json) {
    for (var key in json) {
        var distro = json[key];

        var card = '<a class="card ' + key + '" href="' + distro.address + '" target="_blank"></a>';
        $('.deck.distro').append (card);

        var image_header = '<img class="image-header" src="/images/logos/' + key + '.svg"></img>';
        $('.card.' + key).append (image_header);

        var content_area = '<div class="content-area"></div>';
        $('.card.' + key).append (content_area);

        var title = '<h1>' + distro.title + '</h1>';
        $('.' + key +' .content-area').append (title);

        var tagline = '<p data-align="center">' + distro.tagline + '</p>';
        $('.' + key +' .content-area').append (tagline);

        $('.' + key +' .content-area').append ('<hr/>');

        var store_link = '<a class="action" href="'+ distro.store
            + '" target="_blank"><i class="fa fa-fw fa-shopping-basket"></i><span>Buy Merch<span></a>';
        $('.' + key +' .content-area').append (store_link);
    }
});

$.getJSON('/data/apps.json', function (json) {
    for (var key in json) {
        var app = json[key];

        var card = '<a class="card ' + key + '" href="' + app.address + '" target="_blank"></a>';
        $('.deck.apps').append (card);

        var image_header = '<img class="image-header" src="/images/logos/' + key + '.svg"></img>';
        $('.card.' + key).append (image_header);

        var content_area = '<div class="content-area"></div>';
        $('.card.' + key).append (content_area);

        var title = '<h1>' + app.title + '</h1>';
        $('.' + key +' .content-area').append (title);

        var tagline = '<p data-align="center">' + app.tagline + '</p>';
        $('.' + key +' .content-area').append (tagline);
    }
});

$.getJSON('/data/people.json', function (json) {
    for (var key in json) {
        var person = json[key];

        var card = '<a class="card ' + key + '" href="' + person.address + '" target="_blank"></a>';
        $('.deck.people').append (card);

        var image_header = '<img class="image-header" src="/images/faces/' + key + '.jpg"></img>';
        $('.card.' + key).append (image_header);

        var content_area = '<div class="content-area"></div>';
        $('.card.' + key).append (content_area);

        var title = '<h1>' + person.title + '</h1>';
        $('.' + key +' .content-area').append (title);

        var tagline = '<p data-align="center">' + person.tagline + '</p>';
        $('.' + key +' .content-area').append (tagline);
    }
});
