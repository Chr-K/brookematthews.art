<?php
namespace Controllers;

use Models\AdminModel;
 class AdminController{
#test
    function admin_login(){
        $model = new AdminModel();
        $email = $_POST['email'];
        $password = $_POST['password'];
        $response = $model->Login($email,$password);
        return($response);
    }
}

?>