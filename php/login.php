<?php
	
    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];

	//Inicio Leitura XML
	$retorno = "";

	$xmlString = file_get_contents("../xml/base_usuarios.xml");
	$xml = simplexml_load_string($xmlString);

	foreach($xml->usuario as $u){
		if ($u == $usuario && $senha = $u["senha"]){
            $retorno[0]["validacao"] = "Valido";
            echo $retorno;
        }
	}
?>