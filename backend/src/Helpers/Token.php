<?php
namespace App\Helpers;

use Exception;
use Firebase\JWT\JWT;
class Token{
    private $key;
    function __construct()
    {
        $this->key = getenv('Private_Key');
    }
    function MakeToken($id){
        $time = time();
        $expire = $time + (7 * 24 * 60 * 60);
        $jwt = JWT::encode([
            'id'=>$id,
        ],$this->key,'RS256');
        setcookie('jwt',$jwt,$expire,'/','.brookematthews.art',true,true);
    }
    function DecodeToken(){
        $jwt = $_COOKIE['jwt'];
            try {
                $decoded = JWT::decode($jwt,getenv('Public_Key'));
                return $decoded;
            } catch (Exception $e) {
                echo 'Invalid JWT: ' . $e->getMessage();
                http_response_code(401);
                exit();
            }

    }
}


?>