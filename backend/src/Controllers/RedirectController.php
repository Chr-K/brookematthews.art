<?php
namespace App\Controllers;
class RedirectController{
    function admin_home(){
        header("HTTP/1.1 302 Found");
        header("Location: https://admin.brookematthews.art/home");
        exit();
    }
}



?>