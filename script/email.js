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
            login: usuario.login,
            senha: usuario.senha,
            action: "list_emails",
            type: "recived"
        },
        success: function (data) {
            var resultado = JSON.parse(data);
            gera_lista_emails(resultado);
            $("#overlay").fadeOut();
        },
        error: function () {
            alert("erro");
        }
    });
    $("#nova_mensagem").click(inputs_email);
    $(".opcoes").click(function () {
        var classe = $(this).attr("class");
        var tipo = $(this).attr("tipo");

        if (classe.indexOf("background_blue") == -1) {
            $(".opcoes").removeClass("background_blue");
            $(this).addClass("background_blue");

            $.ajax({
                type: "GET",
                url: "../php/email.php",
                data: {
                    login: usuario.login,
                    senha: usuario.senha,
                    action: "list_emails",
                    type: tipo
                },
                success: function (data) {
                    var resultado = JSON.parse(data);
                    gera_lista_emails(resultado);
                },
                error: function () {
                    alert("erro");
                }
            });
        }
    });
});
