$.each(episodes, function (k, v) {
    $('#episodes').append(
        '<div>' +
        '<p>' + episodes[k].title.split(' - ')[1] + '</p>' +
        '<p>' + episodes[k].description + '</p>' +
        '<p>' + episodes[k].date + '</p>' +
        '<p>' + episodes[k].link + '</p>' +
        '<img src=' + episodeImages[k] + '>' +
        '<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + v.guid + '&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>' +
        '</div>'
    );
});
