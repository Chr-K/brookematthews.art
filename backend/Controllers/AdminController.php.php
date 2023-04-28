<?php
namespace Controllers;

use Models\AdminModel;
 class AdminController{
    function admin_login(){
        $model = new AdminModel();
        $response = $model->Login($_POST['email'],$_POST['password']);
        return('test_successful');
    }
}

?>