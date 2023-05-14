<?php
namespace App\Controllers;
use App\Models\AdminModel;
use App\Helpers\Token;
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
        $currentPhotoUrl = $_POST['currentPhotoUrl'];
        $model = new AdminModel();
        $newURL = $this->uploadImage();
                if($model->updateItemPhotoURL($currentPhotoUrl,$newURL)){
                    return("file upload success");
                }
                else{
                    return("file upload failed 2");
                }

        
    }

    function addItem(){
        $token = new Token();
        $model = new AdminModel();
        $name = $_POST['itemName'];
        $price = $_POST['price'];
        $description = $_POST['description'];
        $url = $this->uploadImage();
        if($token->DecodeToken()){
            if($model->addItem($name,$price,$description,$url)){
                return('item added');
            }
            else{
                return('add item failed');
            }
        }
        else{
            return('add item failed');
        }
    }


    function uploadImage(){
        $model = new AdminModel();
        $token = new Token();
        $uuid = Uuid::uuid4();
        $targetDir = getenv("IMAGE_UPLOAD_FILE");
        $fileType = strtolower(pathinfo(basename($_FILES["uploadPicture"]["name"]),PATHINFO_EXTENSION));
        $targetFile = $targetDir . $uuid . '.' . $fileType;
        $newURL = getenv("NEW_IMAGE_PATH") . $uuid . '.' . $fileType; 
        
        if($token->DecodeToken()){
            if($model->UploadImageCheck($targetFile,$fileType)){
                if(move_uploaded_file($_FILES["uploadPicture"]["tmp_name"],$targetFile)){
                    return $newURL;
                }
                else {
                    exit('upload failed');
                }
            }
            else {
                exit('upload failed');
            }
        }
    }
}

?>