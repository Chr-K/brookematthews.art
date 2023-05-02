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
                header('Location: /home');
                exit();
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