<?php
	$usuario = $_POST['usuario'];
    $senha = $_POST["senha"];
	//Inicio Leitura XML

	$xmlString = file_get_contents("../xml/base_usuarios.xml");
	$xml = simplexml_load_string($xmlString);
	$valido = false;
	
	foreach($xml->usuario as $u){
		if ($u == $usuario && $senha = $u["senha"]){
            $valido = true;
        }
	}
	
	
	if($valido){
		$_SESSION['usuario'] = $usuario;
		$_SESSION['senha'] = $senha;
		$retorno["link"] =  trim("email.html");
		echo json_encode($retorno);
	}
	else{
		unset ($_SESSION['usuario']);
		unset ($_SESSION['senha']);
		$retorno["link"] =  trim("../index.html");
		echo json_encode($retorno);
	}	
?>
