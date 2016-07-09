angular
    .module('core.user')
    .factory('userService', ['$http', function ($http) {
        var service = {};

        service.getUsers = getUsers;
        service.createUser = createUser;
        service.deleteUser = deleteUser;
        service.editUser = editUser;
        return service;

        function getUsers() {
            return $http.get('http://localhost:8080/user')
                .then(handleSuccess, handleError('Error getting users'));
        }

        function createUser(user) {
            return $http.post('http://localhost:8080/user', user)
                .then(handleSuccess, handleError('Error creating user'));
        }
        
        function deleteUser(id) {
            return $http.delete('http://localhost:8080/user', {
                params: {id: id}
            })
                .then(handleSuccess, handleError('Error deleting user'));
        }

        function editUser(user) {
            return $http.put('http://localhost:8080/user', user)
                .then(handleSuccess, handleError('Error editing user'));
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return {success: false, message: error};
            };
        }
    }]);