<?php
	error_reporting(E_ALL); // Error engine - always TRUE!
	ini_set('ignore_repeated_errors', TRUE); // always TRUE
	ini_set('display_errors', TRUE); // Error display - FALSE only in production environment or real server
	ini_set('log_errors', TRUE); // Error logging engine
	ini_set('error_log', 'logs/cadastro.log'); // Logging file path
	ini_set('log_errors_max_len', 1024); // Logging file siz


	$xusuario = $_POST["usuario"];
    $xsenha = $_POST["senha"];
	$usuarios = new DOMDocument('1.0');

	$usuarios->loadXML(file_get_contents("../xml/base_usuarios.xml"), LIBXML_NOBLANKS);
	
	$id = ((int)$usuarios->usuario[-1]->attributes()["id"]) + 1;

	$usuario = $usuarios->createElement('usuario', $xusuario);
	$usuario->setAttribute("id", $id);
	$usuario->setAttribute("senha", $xsenha);
	
	$usuarios->appendChild($usuario);
	$usuarios->save('../xml/base_usuarios.xml');

	echo"Sucesso";
?>