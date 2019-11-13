$(document).ready(function () {
    $.ajax(
        {
            type: "POST",
            url: "php/conexao.php",
            contentType: 'application/json',
            data: {
                "action": "palmeirasTemMundial?"
            },
            success: function (result) {
                var resultado = JSON.parse(result);
                if (resultado["mundial"] = "não") {
                    window.location.href = "pages/login.html";
                } else {
                    $("#conexao").html("<label>Palmeiras não tem mundial, mas pelo menos conectou ao php</label>");
                }
            },
            error: function() {
                  $("#conexao").html("<label>Palmeiras não tem mundial</label>");
            }
        });
});
