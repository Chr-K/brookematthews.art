<?php
namespace Models;

class ItemModel{
    private $mysqli;
    private function __construct()
    {
        require_once('../db.php');
        $this->mysqli = $mysqli;
    }
    function get_items(){
        $stmt = $this->mysqli->prepare('SELECT name FROM shop');
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
    }
}



?>