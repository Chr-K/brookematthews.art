<?php
namespace Models;

class ItemModel{
    function get_items(){
        /*
             $stmt = $mysqli->prepare('SELECT name FROM shop');
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows()>0){
            $results = array();
            $stmt->bind_result($name);
            while ($stmt->fetch()){
                array_push($results,$name);
            }
            return($name);
        }   
        */
        $us = getenv('DB_USER');
        echo json_encode($us) ;
    }
}



?>