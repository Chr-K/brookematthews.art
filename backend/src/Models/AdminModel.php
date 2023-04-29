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
                $Token = new Token();
                $Token->MakeToken('1','2');
                http_response_code(201);
                return('success');
            }
            else{

                return (false);
            }
        }
        else{
            return($email);
        }
    }
}


?>