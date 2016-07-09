angular
    .module('userForm')
    .component('userForm', {
        templateUrl: "resources/templates/user-form.template.html",
        controller: ['$scope', '$rootScope', 'userService',
            function UserFormController($scope, $rootScope, userService) {

                $scope.addUser = function (user) {
                    userService.createUser(user)
                        .then(function (userAdded) {
                            $rootScope.$broadcast('user:added', userAdded);
                        });
                };
                
            }]
    });
