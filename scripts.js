$(document).ready(function () {
    $("#search").click(function () {
        var searchTerm = $("#searchTerm").val();

        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

        $.getJSON(url, function (data) {
            // (data[1][0]); gets heading
            // (data[2][0]); gets description
            // (data[3][0]); gets link

            // clears search bar after search
            $("#output").empty();

            for (var i = 0; i < data[1].length; i++) {
                $("#output").append("<div class='output-results'><a href = " + data[3][i] + " target='blank'><h2>" + data[1][i] + "</h2></a><p>" + data[2][i] + "</p></div>");
                $(".output-results").css("background", "rgba(8, 217, 214, 0.85)");
            }
            $("#searchTerm").val("");
        });
    });
    // runs search if user presses enter instead of search icon 
    $("#searchTerm").keypress(function (enter) {
        if (enter.which == 13) {
            $("#search").click();
        };
    });
});
