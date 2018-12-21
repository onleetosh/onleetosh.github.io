//get top tags api request
$(document).ready(function() {
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=e368bc90b36bc0339e0bf05aad7fd4f8&format=json", function(result) {
        var topTag = '';
        $.each(result.tags.tag, function(i, item) {
            topTag += "<p><a href=" + item.url + " target='_blank'><br> " + item.name + " </a><br> " + "Number of tags : " +item.taggings +"</p>";                     });
        $('#result').append(topTag);
    });
});
