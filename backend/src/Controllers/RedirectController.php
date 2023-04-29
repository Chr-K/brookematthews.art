<?php
namespace App\Controllers;
class RedirectController{
    function admin_home(){
        header("location: /home");
        exit();
    }
}



?>