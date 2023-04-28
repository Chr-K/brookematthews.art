<?php
namespace Models;
use Auth\Token;
class AdminModel{
    function Login($email,$password){
        require './backend/db.php';
        $stmt = $mysqli->prepare('SELECT * from admins where email = ?');
        $stmt->bind_param('s',$email);
        $stmt->execute();
        $result = $stmt->get_result();
        if($result->num_rows>0){
            $row = $result->fetch_assoc();
            if(password_verify($password,$row['password'])){
                $id=$row['id'];
                $Token = new Token();
                $Token->MakeToken($id,$email,"/");
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