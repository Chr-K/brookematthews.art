<?php
namespace App\Controllers;
class RedirectController{
    function admin_home(){
        header("location: https://admin.brookematthews.art/home");
        exit();
    }
}



?>