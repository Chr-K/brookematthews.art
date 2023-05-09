<?php
namespace App\Models;
use App\Helpers\Token;

class AdminModel{
    function Login($email,$password){
        require 'db.php';
        $stmt = $mysqli->prepare('SELECT * from admins where email = ?');
        $stmt->bind_param('s',$email);
        $stmt->execute();
        $result = $stmt->get_result();
        if($result->num_rows>0){
            $row = $result->fetch_assoc();
            if(password_verify($password,$row['password'])){
                $_SESSION['user_id'] = $row['id'];
                $Token = new Token();
                $Token->MakeToken('1','2');
                http_response_code(201);
            }
            else{

                return (false);
            }
        }
        else{
            return($email);
        }
    }
    function Logout(){
        $token = new Token();
        $tokenDecoded= $token->DecodeToken();
        $createdAt = $tokenDecoded->iat;
        $expire = $createdAt + (7 * 24 * 60 * 60);
        session_destroy();
        setcookie('jwt','',$expire,'/','.brookematthews.art',true,true);
    }
    function UpdateItemPhoto($targetFile,$fileType){

        //check if file is valid
        if(isset($POST["itemimage"])){
            $check = getimagesize($_FILES["uploadPicture"]["tmp_name"]);
            if($check){
                $uploadOK = true;
            }
            else{
                echo '1m';
                $uploadOK = false;
            }
        }
        if(file_exists($targetFile)){
            echo '2m';

            $uploadOK = false;
        }
        if($_FILES["uploadPicture"]["size"]>20000000){
            echo '3m';

            $uploadOK = false;
        }

        $allowFormats = array("jpg","jpeg","png");
        if(in_array($fileType,$allowFormats) == false){
            echo '4m';
            $uploadOK = false;
        }
        echo $uploadOK;
        return($uploadOK);

    }

    function updateItemPhotoURL($currentPhotoUrl,$targetFile){
        require('db.php');
        $stmt = $mysqli->prepare('UPDATE items SET url = ? WHERE url = ?');
        $stmt->bind_param('ss',$targetFile,$currentPhotoUrl);
        if($stmt->execute())
        {
            return(true);
        }
        else{
            echo '5m';
            return(false);
        }
    }
}


?>