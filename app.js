var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=126d69d3a84d4f1b9839994bc79f5152")
  .then(function(response) {
      $scope.myWelcome = response.data;
  });
});