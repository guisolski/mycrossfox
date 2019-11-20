<?php
  class email {
    var $name,$header,$data,$body,$name2;
    public function __construct() {
        $get_arguments       = func_get_args();
        $number_of_arguments = func_num_args();
        if (method_exists($this, $method_name = '__construct'.$number_of_arguments)) {
            call_user_func_array(array($this, $method_name), $get_arguments);
        }
    }
    public function __construct3($_name,$_header,$_data) {
       $this-> name = $_name;
       $this-> header = $_header;
       $this-> data = $_data;
    }
    public function __construct5($_name,$_name2,$_header,$_data,$_body) {
        $this-> name = $_name;
        $this-> header = $_header;
        $this-> data = $_data;
        $this-> body = $_body;
        $this-> name2 = $_name2;
     }

 }

  function is_user($login,$senha){
    $xmlString = file_get_contents("../xml/base_usuarios.xml");
	$xml = simplexml_load_string($xmlString);
	$valido = false;
	
	foreach($xml->usuario as $u){
		if ($u == $login && $senha = $u["senha"]){
            $valido = true;
        }
    }
    return $valido;
  }

  function list_emails($login,$type){
    $xmlString = file_get_contents("../xml/base_emails.xml");
	$xml = simplexml_load_string($xmlString);
    $list = array();
    $contador = 0;
	foreach($xml as $i){
        switch ($type){
            case "send":
                if($i->send == $login){
                    $_email = new email(strval($i->received),strval($i->header),strval($i->data));
                    $list[$contador] = $_email;
                 }
            break;
            case "recived":
                if($i->received == $login){
                   $_email = new email(strval($i->send),strval($i->header),strval($i->data));
                   $list[$contador] = $_email;
                }
            break;
        }
        $contador += 1;
    }
    return $list;
  }
  function get_email($login,$id){
    $xmlString = file_get_contents("../xml/base_emails.xml");
    $xml = simplexml_load_string($xmlString);
    $contador = 0;
	foreach($xml as $i){
        if($contador == $id and ($i->send == $login or $i->received == $login)){
            return new email(strval($i->send),strval($i->received),strval($i->header),strval($i->data),strval($i->body));
        }
        $contador += 1;
    }
  }

  function send_email(){
    //Pega n elementos passados na função 
    $get_arguments = func_get_args();
    $number_of_arguments = func_num_args();
    //cria um array
	$array = array("send","received","header","body","data");
	//inicializa o xml
	$filename = "../xml/base_emails.xml";
	$xml = new DOMDocument( '1.0', 'UTF-8' );
	$xml->preserveWhiteSpace = false;
	$xml->formatOutput = true;
	$xml->load($filename);
	$xml_emails = $xml->getElementsByTagName( 'emails' )->item( 0 );
	$xml_email = $xml->creatEelement("email");
    if(count($array) == $number_of_arguments){
        for($i = 0; $i < $number_of_arguments; $i++){
			$xml_temp = $xml->createElement( $array[$i], $get_arguments[$i]);
			$xml_email->appendChild($xml_temp); 
        }
	}
	$xml_emails->appendChild($xml_email); 
	
    $xml->save($filename);
  }

  
  $login = $_GET["login"];
  $senha = $_GET["senha"];

  if(is_user($login,$senha)){
    $action = $_GET["action"];

    switch ($action){
        case "list_emails":
            $type = $_GET["type"];
            echo json_encode(list_emails($login,$type));
        break;
        case "get_email":
            $id = $_GET["id"];
            echo json_encode(get_email($login,$id));
        break;
        case "send_email":
            $send = $login;
            $received = $_GET["received"];
            $header = $_GET["header"];
            $body = $_GET["body"];
            $data = date_default_timezone_get();
            send_email($send,$received,$header,$body,date('m/d/Y h:i:s a', time()));
        break;
    }
  }
?>
