<?php
class Router{
    protected $routes = [];
public function addRoute($method,$url,$controller,$handler){
        $this->routes[] = ['method'=>$method,'url'=>$url,'controller'=>$controller,'handler'=>$handler];
    }
public function handleRequest(){
    $method = $_SERVER['REQUEST_METHOD'];
    $url = $_SERVER['REQUEST_URI'];
    foreach($this->routes as $route){
        if($route['method'] === $method && preg_match('#^' . $route['url'] . '$#',$url,$matches)){
            array_shift($matches);
            $controllerName = $route['controller'];
            $handler = $route['handler'];
            $controllerClass = 'Controllers\\' . $controllerName;
            echo $controllerName;
            $controller = new $controllerClass();
            $response = $controller->$handler(...$matches);
            echo json_encode($response);
            return;
        }
    }
    http_response_code(404);
    echo json_encode($_SERVER['REQUEST_URI'].$method);
    }
}


?>