<?php
namespace App\Models;

class ItemModel{
    function get_items(){
        /* */
        require 'db.php';
        $stmt = $mysqli->prepare('SELECT url, name, description, price FROM items');
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows()>0){
            $results = array();
            $stmt->bind_result($url,$name,$description,$price);
            while ($stmt->fetch()){
                array_push($results,array('url'=>$url,'name'=>$name,'$description'=>$description,'price'=>$price));
            }
            return($results);
        }   
    }
}



?>