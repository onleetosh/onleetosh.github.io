//get top artist api request 
$(document).ready(function() {
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e368bc90b36bc0339e0bf05aad7fd4f8&format=json", function(result) {
        var topArtist = '';
        $.each(result.artists.artist, function(i, item) {
            topArtist += "<p><a href=" + item.url + " target='_blank'><br> " + item.name + " </a><br> Fans: " + item.listeners + "<br> Total Number of Streams: " +item.playcount +"</p>";                     });
        $('#result').append(topArtist);
    });
});

