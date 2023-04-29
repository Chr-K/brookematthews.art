<?php
require_once __DIR__ . '/vendor/autoload.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header('Access-Control-Allow-Headers: Content-Type');


require_once './router.php';
use App\Controllers\ItemController;
use App\Controllers\AdminController;
session_start();
$router = new Router();
$router->addRoute('GET','/getitems',new ItemController,'get_items');
$router->addRoute('POST','/adminlogin',new AdminController,'admin_login');
$router->handleRequest();
?>