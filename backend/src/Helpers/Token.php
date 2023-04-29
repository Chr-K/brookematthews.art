<?php
namespace App\Helpers;

use Exception;
use Firebase\JWT\JWT;

class Token{
    private $key;
    function __construct()
    {
        $this->key = 'test';
    }
    function MakeToken($id,$email){

        $jwt = JWT::encode([
            'id'=>$id,
            'email'=>password_hash($email,PASSWORD_DEFAULT)
        ],$this->key,'HS256');
        setcookie('jwt',$jwt,3600,'/','.brookematthews.art',true,true);
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