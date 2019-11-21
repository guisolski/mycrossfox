var usuario = JSON.parse(sessionStorage.getItem("usuario"));
function gera_lista_emails(lista) {
    var html = "";

    for (var i in lista) {
        html += "<div class='email_p'><div class='email border-bottom border-bottom-dark' id='" + i + "'>";
        var obj = lista[i];
        for (var j in obj) {
            var imprime = obj[j];
            if (imprime != null) if (imprime.length > 45) imprime = imprime.substring(0, 45) + "...";
            if (j == "name") {
                html += "<label>" + imprime + "</label><br>";
            }
            else if (j == "header") {
                html += "<label class='blueText smallText paddinRigth'>" + imprime + "</label>";
            }
            else if (j == "data") {
                html += "<label class='blueText smallText'>" + imprime + "</label> <br>";
            }
            else if (j == "body") { 
                html += "<label class='blueText smallText'>" + imprime + "</label> <br>";
            }
        }
        html += "</div></div>"
    }
    $("#emails").empty().html(html);

    $('.email').click(function () {
        var classe = $(this).attr("class");
        var id = $(this).attr("id");
        if (classe.indexOf("background_blue") == -1) {
            $(".email").removeClass("background_blue");
            $(this).addClass("background_blue");

            $.ajax({
                type: "GET",
                url: "../php/email.php",
                data: {
                    login: usuario.login,
                    senha: usuario.senha,
                    action: "get_email",
                    id: id
                },
                success: function (data) {
                    var resultado = JSON.parse(data);
                    gera_email(resultado);
                },
                error: function () {
                    alert("erro");
                }
            });
        }
    });
}

function gera_email(lista) {
    var html = "";
    html += 'De: ' + lista.name + '<br>Para: ' + lista.name2 + '<br>Assunto: ' + lista.header + '<br>' + lista.data + '<br>' + lista.body;
    $("#email").empty().html(html);

}
function inputs_email() {
    var html = "";
    html += "<label>Para:</label> <input type='text' id='received'> <br> <label>Assunto:</label> <input type='text' id='header'> <br> <label>Corpo:</label> <textarea rows='5' col='10' id='body'></textarea> <button type='button' class='shadow-none px-5 btn btn-primary' id='enviar'>Enviar</button>";
    $("#email").empty().html(html);
    $("#enviar").click(function () {
        $.ajax({
            type: "GET",
            url: "../php/email.php",
            data: {
                login: usuario.login,
                senha: usuario.senha,
                action: "send_email",
                received : $("#received").val(),
                header : $("#header").val(),
                body : $("#body").val()
            },
            success: function (data) {
                //var resultado = JSON.parse(data);
                $("#email").empty().html("<label>Sucesso</label>");
            },
            error: function () {
                alert("erro");
            }
        });
    });
}
