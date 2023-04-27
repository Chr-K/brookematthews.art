<?php
namespace Models;

class AdminModel{
    function Login($email,$password){
        require 'db.php';
        $stmt = $mysqli->prepare('SELECT email, password from shop');
    }
}


?>