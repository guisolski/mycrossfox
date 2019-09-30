$(document).ready(function () {
    $("#senha").hide();
    function proximo() {
        if ($("#input_login").val() != "") {
            $("#nome").html('' + $("#input_login").val());
            $("#login").hide();
            $("#senha").removeClass("invisible");
            $("#input_login").removeClass("error");
            $("#senha").show();
        }
        else {
            $("#input_login").addClass("error");
            alert("Entre com um valor");
        }
    }




    $("#nome").click(function () {
        $("#login").show();
        $("#senha").hide();
    });


    $("#proximo").click(function () {
        proximo();
    });

    $("#input_login").keypress(function (e) {
        if (e.keyCode == 13) {
            proximo();
        }
    });

    $("#entrar").click(function () {
        if ($("#input_login").val() != "") {
            alert("mandar pro servidor");
        }
        else {
            $("#input_login").addClass("error");
            alert("Entre com um valor");
        }
    });

    $("#input_senha").keypress(function (e) {
        if (e.keyCode == 13) {
            if ($("#input_senha").val() != "") {
                alert("mandar pro servidor");
            }
            else {
                $("#input_senha").addClass("error");
                alert("Entre com um valor");
            }
        }
    });

});