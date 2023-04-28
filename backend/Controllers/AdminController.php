<?php
namespace Controllers;

use Models\AdminModel;
 class AdminController{
#test
    function admin_login(){
        $model = new AdminModel();
        $response = $model->Login($_POST['email'],$_POST['password']);
        echo ('admin controller init');
        return($response);
    }
}

?>