$.each(episodeImages, function (k, v) {
    $('#episodes').append(
        '<div id="episode'+k+'" class="episodeContainer">'+
            '<div class="coverContainer" onclick="displayControls('+k+')">'+
                '<img src='+v+' class="episodeCover">'+
                '<div class="coverHover">'+
                    '<p>'+episodes[k].title.split(' - ')[1]+'</p>'+
                '</div>'+
            '</div>'+
            '<div class="episodeInfo"></div>'+
        '</div>');
});

function displayControls(episodeNum){
    console.log(episodeNum);
    if ($('#episode'+episodeNum).hasClass('episodeExpanded')){
        $('#episode'+episodeNum+' .episodeInfo').empty();
        $('#episode'+episodeNum).removeClass('episodeExpanded');
    } else {
        $('.episodeExpanded .episodeInfo').empty();
        $('.episodeExpanded').removeClass('episodeExpanded');
        $('#episode'+episodeNum).addClass('episodeExpanded');
        $('#episode'+episodeNum+' .episodeInfo').append(
            '<h2 class="episodeHeader">' + episodes[episodeNum].title.split(' - ')[1] + '</h2>'+
            '<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+episodes[episodeNum].guid+'&color=%23ff5500&inverse=true&auto_play=false&show_user=true"></iframe>' +
            '<p>' + episodes[episodeNum].description + '</p>' 
        );
    }
}

$('.coverContainer').hover(
    function(){
       $(this).find('.coverHover').fadeIn(200); 
    },
    function(){
       $(this).find('.coverHover').fadeOut(200); 
    }
);