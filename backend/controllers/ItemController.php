<?php
namespace Controllers;

use Models\ItemModel;
#test
class ItemController {
    function get_items(){
        $model = new ItemModel();
        $data = $model->get_items();
        return($data);
    }
}


?>