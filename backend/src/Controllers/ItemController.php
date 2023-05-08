<?php
namespace App\Controllers;

use App\Models\ItemModel;
class ItemController {
    function get_items(){
        $model = new ItemModel();
        $data = $model->get_items();
        return($data);
    }

}


?>