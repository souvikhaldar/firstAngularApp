var app=angular.module('myApp',[]);
app.controller('myCtrl',['$scope','$http',function($scope,$http){
	/*$http.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=126d69d3a84d4f1b9839994bc79f5152').then(function(data){
		$scope.datas=data.articles;
		console.log($scope.datas);
	},function(data){
		
	});*/
	$http({
  method: 'GET',
  url: 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=126d69d3a84d4f1b9839994bc79f5152'
}).then(function successCallback(response) {
    $scope.datas=response.articles;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}]);