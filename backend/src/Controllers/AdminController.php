<?php
namespace App\Controllers;
use App\Models\AdminModel;
 class AdminController{
    private $data;
    function __construct()
    {
        header('Access-Control-Allow-Origin: https://admin.brookematthews.art');
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
    function isLoggedIn(){
        if(isset($_SESSION['user_id'])){
            $result = true;
        }
        else{
            $result = false;
        }
        return(json_encode($result));
    }
}

?>