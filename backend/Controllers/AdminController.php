<?php
namespace Controllers;

use Models\AdminModel;
 class AdminController{
#test
    function admin_login(){
        $model = new AdminModel();
        $email = json_encode($_POST['email']);
        echo $email;
        $password = filter_var(json_decode($_POST['password']),FILTER_UNSAFE_RAW);
        $response = $model->Login($email,$password);
        return($response);
    }
}

?>