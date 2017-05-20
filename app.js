var app=angular.module("myApp",[])
app.controller("myController",["$scope","$resource",function($scope,$resource){
	$scope.message="I know this is from controller"
$scope.getWeatherDetails=function(){
	$resource("https://jsonplaceholder.typicode.com/posts/1")
.get(function(data){
console.log(data)
})


}

}])