<?php
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/router.php';

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header('Access-Control-Allow-Headers: Content-Type');
session_start();


use App\Controllers\ItemController;
use App\Controllers\AdminController;
$router = new Router();
$router->addRoute('GET','/get_admin_status',new AdminController,'isLoggedIn');
$router->addRoute('GET','/getitems',new ItemController,'get_items');
$router->addRoute('POST','/adminlogin',new AdminController,'admin_login');
$router->handleRequest();
?>