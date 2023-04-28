<?php
namespace Controllers;

use Models\AdminModel;
 class AdminController{
    public function __construct()
    {
        echo 'Admin Controller loaded successfull';
    }
    function admin_login(){
        $model = new AdminModel();
        $response = $model->Login($_POST['email'],$_POST['password']);
        return($response);
    }
}

?>