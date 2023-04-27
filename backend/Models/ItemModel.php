<?php
namespace Models;

class ItemModel{
    function get_items(){
        /*
        
                require 'db.php';
        $stmt = $mysqli->prepare('SELECT name FROM items');
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows()>0){
            $results = array();
            $stmt->bind_result($name);
            while ($stmt->fetch()){
                array_push($results,array('name'=>$name));
            }
            return($results);
        }   
        
        */
        $var = getenv('DB');
        return($var);
    }
}



?>