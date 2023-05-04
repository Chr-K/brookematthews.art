<?php
namespace App\Helpers;

use Exception;
use Firebase\JWT\JWT;
class Token{
    function MakeToken($id){
        $privkey = file_get_contents(getenv('PRIVATE_KEY'));
        $time = time();
        $expire = $time + (7 * 24 * 60 * 60);
        $jwt = JWT::encode([
            'iss'=>'https://api.brookematthews.art',
            'aud'=>'https://admin.brookematthews.art',
            'iat'=>$time,
            'id'=>$id,
        ],$privkey,'RS256');
        setcookie('jwt',$jwt,$expire,'/','.brookematthews.art',true,true);
    }
    function DecodeToken(){
        $publickey = file_get_contents(getenv('PUBLIC_KEY'));

        $jwt = $_COOKIE['jwt'];
            try {
                $decoded = JWT::decode($jwt,getenv('PUBLIC_KEY'));
                return $decoded;
            } catch (Exception $e) {
                echo 'Invalid JWT: ' . $e->getMessage();
                http_response_code(401);
                exit();
            }

    }
}


?>