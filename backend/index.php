<?php
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/router.php';

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials:true');

use App\Controllers\ItemController;
use App\Controllers\AdminController;
session_start();

$router = new Router();
$router->addRoute('GET','/get_admin_status',new AdminController,'isLoggedIn');
$router->addRoute('GET','/getitems',new ItemController,'get_items');
$router->addRoute('POST','/adminlogin',new AdminController,'admin_login');
$router->addRoute('GET','/admin_logout',new AdminController,'admin_logout');
$router->addRoute('POST','/updateitemphoto',new AdminController,'UpdateItemPhoto');
$router->addRoute('POST','/additem',new AdminController,'addItem');


$router->handleRequest();
?>