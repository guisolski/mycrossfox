function gera_lista_emails(lista) {
    var html = "";
    
    for (var i in lista){  
        html += "<div id='"+i + "'>";
        var obj = lista[i];
        console.log(typeof obj);
        let contador = 0;
        for (var j in obj){
           if(contador<3) html+= "<div><label>" + obj[j] +  "</label> </div>";
           contador+=1;
        } 
        html += "</div>"
    }
    $("#emails").html(html);
}
