<?php
namespace App\Controllers;
use App\Models\AdminModel;
use App\Helpers\Token;
use Ramsey\Uuid\Rfc4122\UuidV4;
use Ramsey\Uuid\Uuid;
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
    function UpdateItemPhoto(){
        $uuid = Uuid::uuid4();
        $targetDir = getenv("IMAGE_UPLOAD_FILE");
        $fileType = strtolower(pathinfo(basename($_FILES["uploadPicture"]["name"]),PATHINFO_EXTENSION));
        $targetFile = $targetDir . $uuid . '.' . $fileType;
        $currentPhotoUrl = $this->data['currentPhotoUrl'];
        $model = new AdminModel();
        $token = new Token();
        if($token->DecodeToken()){
            if($model->UpdateItemPhoto($targetFile,$fileType)){
                move_uploaded_file($_FILES["uploadPicture"]["tmp_name"],$targetFile);
                if($model->updateItemPhotoURL($currentPhotoUrl,$targetFile)){
                    return("file upload success");
                }
                else{
                    return("file upload failed 2");
                }
            }
            else {
                return("file upload failed 1");
            }
        }
    }

}

?>