angular.module("MyApp")

.directive("userTable", function(){
  return {
    restrict: "E",
    scope: {
      users: "=",
      order: "=",
      fetch: "&"
    },
    controller: function($scope, $uibModal, UsersModel){
      $scope.getTotalBonus = function(){
        return this.users.filter(function(user){
          return user.checked;
        }).reduce(function(prev, curr){
          return curr.salary + prev;
        }, 0);
      };

      $scope.delete = function (user) {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'templates/delete-modal.html',
          controller: 'ModalInstanceCtrl',
          size: 'sm',
          resolve: {
            user: function () {
              return user;
            }
          }
        });

        modalInstance.result.then(function(id) {
          UsersModel.deleteUser(id)
            .then(function(){
              $scope.fetch();
            });
        }, function () {
          console.info('Modal dismissed at: ' + new Date());
        });
      };

    },
    templateUrl: "templates/user-table.html"
  }
});
