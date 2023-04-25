<?php
header('Access-Control-Allow-Origin: https://brookematthews.art');
require __DIR__ . '/vendor/autoload.php';
require_once './router.php';
session_start();

$router = new Router();
$router->addRoute('GET','/getitems','items_controller','get_items');
$router->handleRequest();
?>