<?php
namespace Controllers;

use Models\AdminModel;

class AdminController{
    function Login(){
        $model = new AdminModel();
        $response = $model->Login();
        return($response);
    }
}

?>