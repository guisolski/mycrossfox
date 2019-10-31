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
            $(function(){
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        usuario:$("#input_criarlogin").val(),
                        senha: $("#input_senha").val(),
                    },
                    url: '../php/cadastro.php',
                    success: function(data){
                        alert(data);
                    },
                    error: function(){
                        alert("erro");
                    }
                });
            });
        }
        else {
            $("#titulo_senha #msg_erro_senha").remove();
            $("#input_senha").addClass("error");
            $("#titulo_senha").append("<label id='msg_erro_senha' class='text-danger'>Insira uma senha válida.<br></label>");
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