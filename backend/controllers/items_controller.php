<?php
namespace controller;

use model\item_models;

class items_controller{
    function get_items(){
        $model = new item_models();
        $data = $model->get_items();
        return($data);
    }
}


?>