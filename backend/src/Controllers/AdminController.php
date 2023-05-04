<?php
namespace App\Controllers;
use App\Models\AdminModel;
use App\Helpers\Token;
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
    function admin_logout(){
        $model = new AdminModel();
        $response = $model->Logout();
        return($response);
    }
    function isLoggedIn(){  
        if(isset($_COOKIE['jwt'])){
            $token = new Token();
            $decoded = $token->DecodeToken();
            if($decoded){
                $result = array('status'=>true);
            }
            else{
                $result = array('status'=>false);

            }
            return($result);

        }

        else{
            $result = array('status'=>false);
            return($result);

        }
    }
}

?>