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
    function MakeToken($id){
        $time = time();
        $expire = $time + (7 * 24 * 60 * 60);
        $jwt = JWT::encode([
            'id'=>$id,
        ],$this->key,'HS256',null,['kid'=>'test']);
        setcookie('jwt',$jwt,$expire,'/','.brookematthews.art',true,true);
    }
    function DecodeToken(){
        $jwt = $_COOKIE['jwt'];
        list($headerB64, $payloadB64, $signatureB64) = explode('.', $jwt);
        $headerJson = JWT::urlsafeB64Decode($headerB64);
        $header = json_decode($headerJson, true);
        if (isset($header['kid']) && $header['kid'] === 'test') {
            try {
                $decoded = JWT::decode($jwt, $this->key, array('HS256'));
                return $decoded;
            } catch (Exception $e) {
                echo 'Invalid JWT: ' . $e->getMessage();
                http_response_code(401);
                exit();
            }
        } else {
            echo 'Invalid or missing "kid" in JWT header';
            http_response_code(401);
            exit();
        }
    }
}


?>