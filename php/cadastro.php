<?php
	//error_reporting(E_ALL); // Error engine - always TRUE!
	//ini_set('ignore_repeated_errors', TRUE); // always TRUE
	//ini_set('display_errors', TRUE); // Error display - FALSE only in production environment or real server
	//ini_set('log_errors', TRUE); // Error logging engine
	//ini_set('error_log', 'logs/cadastro.log'); // Logging file path
	//ini_set('log_errors_max_len', 1024); // Logging file siz
	function creat_user($login,$senha){
		//inicializa o xml
		$filename = "../xml/base_usuarios.xml";
		$xml = new DOMDocument( '1.0', 'UTF-8' );
		$xml->preserveWhiteSpace = false;
		$xml->formatOutput = true;
		$xml->load($filename);
		$xml_usuarios = $xml->getElementsByTagName( 'usuarios' )->item( 0 );
		$xml_usario = $xml->creatEelement("usuario",strval($login));
		$xml_usario->setAttribute("senha",strval($senha));
		$xml_usuarios->appendChild($xml_usario); 
		$xml->save($filename);
	  }

	$login = $_POST["login"];
    $senha = $_POST["senha"];
	creat_user($login,$senha);
	$retorno["link"] =  trim("email.html");
	echo json_encode($retorno);
?>
