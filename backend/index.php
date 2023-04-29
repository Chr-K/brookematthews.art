<?php
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/router.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header('Access-Control-Allow-Headers: Content-Type');


use App\Controllers\ItemController;
use App\Controllers\AdminController;
use App\Controllers\RedirectController;
session_start();
$router = new Router();
$router->addRoute('GET','/getitems',new ItemController,'get_items');
$router->addRoute('POST','/adminlogin',new AdminController,'admin_login');
$router->addRoute('GET','/adminredirect',new RedirectController,'admin_home');
$router->handleRequest();
?>