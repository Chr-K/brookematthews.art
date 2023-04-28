<?php
namespace Controllers;
echo "AdminController.php";
use Models\AdminModel;
 class AdminController{
    private $data;
    function __construct()
    {
        $json_data = file_get_contents('php://input');

        $this->data = json_decode($json_data,true);
    }
    function admin_login(){
        $model = new AdminModel();
        $email = $this->data['email'];
        $password = $this->data['password'];

        $response = $model->Login($email,$password);
        return($response);
    }
}

?>