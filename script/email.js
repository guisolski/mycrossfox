$(document).ready(function () {
    var usuario = JSON.parse(sessionStorage.getItem("usuario"));
    $("#overlay").fadeIn();
    $("#pesquisa").focus(function () {
        $("#div_pesquisa").removeClass("col-sm-2").addClass("col-sm-5");
        $("#vazio").removeClass("col-sm-5").addClass("col-sm-2");
    });
    $("#pesquisa").focusout(function () {
        $("#div_pesquisa").removeClass("col-sm-5").addClass("col-sm-2");
        $("#vazio").removeClass("col-sm-2").addClass("col-sm-5");
    });
    $.ajax({
        type: "GET",
        url: "../php/email.php",
        data: {
            login   : usuario.login,
            senha   : usuario.senha,
            action  : "list_emails",
            type    : "recived"
        },
        success: function (data) {
            var resultado = JSON.parse(data);
            console.log(resultado);
            $("#overlay").fadeOut();
        },
        error: function () {
            alert("erro");
        }
    });
});
