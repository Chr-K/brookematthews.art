<?php
namespace controller;

use model\item_model;

class items_controller{
    function get_items(){
        $model = new item_model;
        $data = $model->get_items();
        return($data);
    }
}


?>