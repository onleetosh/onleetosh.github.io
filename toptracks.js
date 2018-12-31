//get top tracks api request
$(document).ready(function() {
    $.getJSON("//ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e368bc90b36bc0339e0bf05aad7fd4f8&format=json", function(result) {
        var topSongs = '';
        $.each(result.tracks.track, function(i, item) {
            topSongs += "<br><p>" + item.artist.name + "<a href=" + item.url + " target='_blank'><br> " + item.name + " </a><br> " + "Number of streams : " +item.playcount + "</p>";                     });
        $('#result').append(topSongs);
    });
});


