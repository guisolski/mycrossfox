function gera_lista_emails(lista) {
    var html = "";

    for (var i in lista) {
        html += "<div class='email' id='" + i + "'>";
        var obj = lista[i];
        for (var j in obj) {
            var imprime = obj[j];
            if(imprime != null) if(imprime.length > 49) imprime = imprime.substring(0, 49) + "...";
            if (j == "name") {
                html += "<div><label>" + imprime + "</label></div>";
            }
            else if (j == "header") {
                html += "<label class='blueText smallText paddinRigth'>" + imprime + "</label>";
            }
            else if (j == "data") {
                html += "<label class='blueText smallText'>" + imprime + "</label>";
            }
        }
        html += "</div>"
    }
    $("#emails").empty().html(html);
}
