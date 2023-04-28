<?php
require __DIR__ . '/vendor/autoload.php';
header('Access-Control-Allow-Origin: https://brookematthews.art');
require_once './router.php';
use Controllers\ItemController;
use Controllers\AdminController;
session_start();
$router = new Router();
$router->addRoute('GET','/getitems',new ItemController,'get_items');
$router->addRoute('POST','/adminlogin','AdminController','admin_login');
$router->handleRequest();
?>