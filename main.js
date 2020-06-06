$(function () {

    $("#prettify").click(() => {
        try {
            var obj = JSON.parse($("#body").val());
            var pretty = JSON.stringify(obj, undefined, 4);
            $("#body").val(pretty);
        } catch(ex) {
            console.log("Invalid JSON body");
        }
    });

    $("#request_form").submit(function (event) {
        //console.log(event);
        event.preventDefault();
        // get all the inputs into an array.

        var input = {
            basePath: $("#baseUrl").val(),
            relativePath: $("#relativePath").val(),
            method: $("#method").val(),
            auth: $("#bearer").val(),
            body: $("#body").val()
        }
        //console.log(input);

        $.ajax({
            url: input.basePath + input.relativePath,
            method: input.method,
            data: input.body,
            headers: {
                "Authorization": "Bearer " + input.auth
            },
            success: result => console.log(result),
            fail: err => console.log(err)
        });
    });
});