<?php
namespace App\Models;
use App\Helpers\Token;

class AdminModel{
    function Login($email,$password){
        require 'db.php';
        $stmt = $mysqli->prepare('SELECT * from admins where email = ?');
        $stmt->bind_param('s',$email);
        $stmt->execute();
        $result = $stmt->get_result();
        if($result->num_rows>0){
            $row = $result->fetch_assoc();
            if(password_verify($password,$row['password'])){
                $_SESSION['user_id'] = $row['id'];
                $Token = new Token();
                $Token->MakeToken('1','2');
                http_response_code(201);
            }
            else{

                return (false);
            }
        }
        else{
            return($email);
        }
    }
    function Logout(){
        $token = new Token();
        $tokenDecoded= $token->DecodeToken();
        $createdAt = $tokenDecoded['createdAt'];
        $expire = $createdAt + (7 * 24 * 60 * 60);
        session_destroy();
        setcookie('jwt','',$expire,'/','.brookematthews.art',true,true);

    }
}


?>