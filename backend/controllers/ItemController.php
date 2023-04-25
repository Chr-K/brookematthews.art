<?php
namespace Controller;

use Model\ItemModel;

class items_controller{
    function get_items(){
        $model = new ItemModel();
        $data = $model->get_items();
        return($data);
    }
}


?>