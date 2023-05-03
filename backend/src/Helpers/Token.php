<?php
namespace App\Helpers;

use Exception;
use Firebase\JWT\JWT;

class Token{
    private $key;
    function __construct()
    {
        $this->key = getenv('SECRET_KEY');
    }
    function MakeToken($id,$email){

        $time = time();
        $expire = $time + (7 * 24 * 60 * 60);
        $jwt = JWT::encode([
            'id'=>$id,
            'email'=>password_hash($email,PASSWORD_DEFAULT)
        ],$this->key,'HS256');
        setcookie('jwt',$jwt,$expire,'/','brookematthews.art',true,true);
        exit();
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