$(document).ready(function(){
    $.ajax({
    	type : "POST",
    	url : "conexao.php",
   		data : {
      "action" : "palmeirasTemMundial?"
		},
    success : function(data){
            var mundial = retorno.mundial;
            if(mundial == "não"){
              window.location.href = "pages/login.html";
            }else{
              $("#conexao").html("<label>Palmeiras não tem mundial</label>");
            }
    });
		},
	});
});
