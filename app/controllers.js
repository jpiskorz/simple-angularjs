angular.module("MyApp")

.controller("HelloCtrl", ["$scope", "Number", function($scope, Number) {
  $scope.name = "Lucy";
  $scope.value = Number.calculate(23453);
}])

.controller("UsersCtrl", ["$scope", "UsersModel", function($scope, UsersModel) {
  $scope.order = '';

  $scope.fetch = function(){
    $scope.collectionPromise = UsersModel.getCollection(15, 30) // getUser(2)
    .then(function(response){
      response.data.forEach(function(user){
        user.checked = false;
      });
      return response.data
    }).then(function(response){
      $scope.users = response;
    });
  };

  $scope.fetch();
}])

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, user) {
  $scope.user = user;

  $scope.ok = function () {
    $uibModalInstance.close($scope.user.id);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
