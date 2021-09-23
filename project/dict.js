$(function () {
    $('#submit').on('click', function () {
        // alert("hello");
        var word = $('#wordSearch').val();
        console.log(word);
        $.ajax({
            "url": `http://localhost:3000/?wordSearch=${word}`,
            "type": "GET",
            "success": function (data) {
                console.log(data);
                if (data.length == 0) {
                    $('#main').html('');

                    $("#main").append(`<p>No word found for ${word}</p>`);

                } else {
                    $('#main').html('');
                    for (var i = 0; i < data.length; i++) {
                        $("#main").append(`<p> ${i + 1} ${data[i].wordtype} ${data[i].definition}</p>`);
                    }
                }

            },
            "error": function (error) {
                console.log(error);
            }
        });
    });
});