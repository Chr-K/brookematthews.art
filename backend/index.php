<?php
header('Access-Control-Allow-Origin: https://brookematthews.art');

require_once './router.php';
session_start();

$router = new Router();
$router->addRoute('GET','api.brookematthews.art/getitems','item_controller','get_items');


echo json_encode('items');
?>