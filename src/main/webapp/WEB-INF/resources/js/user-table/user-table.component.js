angular
    .module('userTable')
    .component('userTable', {
        templateUrl: "resources/templates/user-table.template.html",
        controller: ['$scope', 'userService',
            function UserTableController($scope, userService) {

                var self = this;
                this.editMode = false;
                this.users = [];

                this.deleteUser = function (id) {
                    userService.deleteUser(id)
                        .then(function (userDeleted) {
                            var index = self.users.indexOf(userDeleted);
                            self.users.splice(index, 1);
                        });
                };

                this.editUser = function () {
                    self.editMode = true;
                };

                this.saveUser = function (user) {
                    console.log(user);
                    userService.editUser(user)
                        .then(function (userEdited) {
                            self.editMode = false;
                        });
                };

                this.fetchUsers = function () {
                    userService.getUsers()
                        .then(function (users) {
                            self.users = users;
                        });
                };
                this.fetchUsers();

                $scope.$on('user:added', function (event, user) {
                    self.users.push(user);
                });
            }]

    });

