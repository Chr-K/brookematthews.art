<?php
namespace Auth;

use Exception;
use Firebase\JWT\JWT;

class Tokens{
    private $key;
    function __construct()
    {
        $this->key = getenv('SECRET_KEY');
    }
    function MakeToken($id,$email,$url){

        $jwt = JWT::encode([
            'id'=>$id,
            'email'=>password_hash($email,PASSWORD_DEFAULT)
        ],$this->key,'HS256');
        setcookie('jwt',$jwt,time() + 3600, '/',$url,true,true);
    }
    function DecodeToken(){
        $jwt = $_COOKIE['jwt'];
        try{
            $decoded = JWT::decode($jwt,$this->key,array('HS256'));
            return($decoded);
        }
        catch(Exception $e){
            echo 'Invalid JWT';
        }
    }
}


?>