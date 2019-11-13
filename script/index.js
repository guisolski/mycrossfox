$(document).ready(function () {
    $.ajax(
        {
            type: "POST",
            url: "conexao.php",
            contentType: 'application/json',
            data: {
                "action": "palmeirasTemMundial?"
            },
            success: function (result) {
                var mundial = retorno.mundial;
                if (mundial == "não") {
                    window.location.href = "pages/login.html";
                } else {
                    $("#conexao").html("<label>Palmeiras não tem mundial</label>");
                }
            }
            error: function() {
                  $("#conexao").html("<label>Palmeiras não tem mundial</label>");
            }
        });
});
