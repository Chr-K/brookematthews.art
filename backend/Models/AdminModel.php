<?php
namespace Models;

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
                return('success');
            }
            else{
                return (password_verify(1234,"$2y$10$OMNttpBtP.jGJDlJVg5o6.jpC7SyDu1TFkqef2GPMP3REn1eAflJi\n"));
            }
        }
        else{
            return($email);
        }
    }
}


?>