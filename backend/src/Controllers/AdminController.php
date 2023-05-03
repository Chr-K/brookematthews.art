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
        session_destroy();
        return('logout success');
    }
    function isLoggedIn(){
        if(isset($_SESSION['user_id'])){
            $result = array('status'=>true);
            $tolken = new Token;
            $tolken_value = $tolken->DecodeToken();
            echo($tolken_value->id);
            return($result);

        }
        elseif($_COOKIE['jwt']){
            $result = array('status=>true');
        }
        else{
            $result = array('status'=>false);
            return($result);

        }
    }
}

?>