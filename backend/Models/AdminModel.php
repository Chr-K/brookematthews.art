<?php
namespace Models;

class AdminModel{
    function Login($email,$password){
        require 'db.php';
        $stmt = $mysqli->prepare('SELECT * from shop where email = ?');
        $stmt->bind_param('s',$email);
        $stmt->execute();
        $result = $stmt->get_result();
        if($result->num_rows>0){
            $row = $result->fetch_assoc();
            if(password_verify($password,$row['password'])){
                return($row);
            }
            else{
                return false;
            }
        }
        else{
            return('email not found');
        }
    }
}


?>