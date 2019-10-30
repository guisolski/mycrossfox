$(document).ready(function () {
    $("#criarSenha").hide();



    function proximo() {

        if ($("#input_criarlogin").val() != "") {
            $("#nome").html('<i class="fa fa-arrow-left"></i> ' + $("#input_criarlogin").val() + $("#selecionarOpcao :selected").text());
            $("#criarLogin").hide();
            $("#criarSenha").removeClass("invisible");
            $("#input_criarlogin").removeClass("error");
            $("#criarSenha").show();
            $("#titulo_cadastro #msg_erro_login").remove()
        }
        else {
            $("#titulo_cadastro #msg_erro_login").remove()
            $("#input_criarlogin").addClass("error");
            $("#titulo_cadastro").append("<label class='text-danger' id='msg_erro_login'><br>Insira um endereço de email válido.</label>")
        }
    }

    $("#nome").click(function () {
        $("#criarLogin").show();
        $("#criarSenha").hide();
    });

    $("#proximo").click(function () {
        proximo();
    });

    $("#input_criarlogin").keypress(function (e) {
        if (e.keyCode == 13) {
            proximo();
        }
    });

    function entrarSenha(){
        if ($("#input_senha").val() != "") {
            window.location.href = "email.html"
            // alert("mandar pro servidor");
            // $("#input_senha").removeClass("error")
            // $("#titulo_senha #msg_erro_senha").remove()
        }
        else {
            $("#titulo_senha #msg_erro_senha").remove()
            $("#input_senha").addClass("error");
            $("#titulo_senha").append("<label id='msg_erro_senha' class='text-danger'>Sua conta ou senha está incorreta.<br>"+
              "Se você não se lembra de sua senha redefina-a em 'Esqueceu a senha?'</label>")
        }
    }

    $("#entrar").click(function () {
        entrarSenha();
    });

    $("#input_senha").keypress(function (e) {
        if (e.keyCode == 13) {
            entrarSenha();
        }
    });

});