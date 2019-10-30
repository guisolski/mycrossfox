$(document).ready(function () {
    $("#senha").hide();



    function proximo() {
        if ($("#input_login").val().indexOf('@') > 0) {
            $("#nome").html('<i class="fa fa-arrow-left"></i> ' + $("#input_login").val());
            $("#login").hide();
            $("#senha").removeClass("invisible");
            $("#input_login").removeClass("error");
            $("#senha").show();
            $("#titulo_login #msg_erro_login").remove()
        }
        else {
            $("#titulo_login #msg_erro_login").remove()
            $("#input_login").addClass("error");
            $("#titulo_login").append("<label class='text-danger' id='msg_erro_login'><br>Insira um endereço de email, número de telefone ou nome Skype válidos.</label>")
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

    function entrarSenha(){
        if ($("#input_senha").val() != "") {
            window.location.href = "email.html"
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