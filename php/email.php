<?php
  class email {
    var $name,$header,$data,$body;
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
    public function __construct4($_name,$_header,$_data,$_body) {
        $this-> name = $_name;
        $this-> header = $_header;
        $this-> data = $_data;
        $this-> data = $_body;
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
                    $list[strval($i->received)] = strval($i->header);
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
        break;
        case "send_email":
        break;
    }
  }
?>
