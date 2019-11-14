$(document).ready(function() {
    $("#senha").hide();
    function validateEmail(email) {
        var re = /^\w+@[coldmail]+[outlock]+?\.[a-zA-Z]{2,3}$/;
        return re.test(email);
    }

    function proximo() {
		if(validateEmail($("#input_login").val())){
        
            $("#nome").html('<i class="fa fa-arrow-left"></i> ' + $("#input_login").val());
            $("#login").hide();
            $("#senha").removeClass("invisible");
            $("#input_login").removeClass("error");
            $("#senha").show();
            $("#titulo_login #msg_erro_login").remove()
        } else {
            $("#titulo_login #msg_erro_login").remove()
            $("#input_login").addClass("error");
            $("#titulo_login").append("<div class'row'><label class='text-danger' id='msg_erro_login'>Insira um endereço de email válido.</label></div>")
        }
    }


    $("#nome").click(function() {
        $("#login").show();
        $("#senha").hide();
    });

    $("#proximo").click(function() {
        proximo();
    });

    $("#input_login").keypress(function(e) {
        if (e.keyCode == 13) {
            proximo();
        }
    });

    function entrarSenha() {
        if ($("#input_senha").val() != "") {
                var login  = $("#input_login").val();
                var senha  = $("#input_senha").val();
                $.ajax({
                    type:"POST",
                    url : "../php/login.php",
                    data : {
                        login :login,
                        senha : senha
                    },
                    success: function (data) {
                        var resultado = JSON.parse(data);
                        sessionStorage.setItem("usuario",JSON.stringify(new usuario(login,senha)));
                        window.location.href = resultado["link"];
                    },
                    error: function() {
                         alert("erro");
                    }
                });
        } else {
            $("#titulo_senha #msg_erro_senha").remove()
            $("#input_senha").addClass("error");
            $("#titulo_senha").append("<label id='msg_erro_senha' class='text-danger'>Sua conta ou senha está incorreta.<br>" +
                "Se você não se lembra de sua senha redefina-a em 'Esqueceu a senha?'</label>")
        }
    }

    $("#entrar").click(function() {
        entrarSenha();
    });

    $("#input_senha").keypress(function(e) {
        if (e.keyCode == 13) {
            entrarSenha();
        }
    });

    function mandaServidor(usuario, senha) {
        //Era pra ter um AJAX top aqui mas o html fica td bugado
        //o php ja ta certin
    }
});
