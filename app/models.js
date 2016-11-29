angular.module("MyApp")

.service("UsersModel", ["$http", "baseURL", function($http, baseURL){
  this.getCollection = function(start, end){
    return $http.get(baseURL + "users", {
      params: {
        _start: start,
        _end: end
      }
    });
  };

  this.getUser = function(id){
    return $http.get(baseURL + "users/" + id);
  };

  this.deleteUser = function(id){
    return $http.delete(baseURL + "users/" + id);
  }
}]);
