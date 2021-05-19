mercadoApp.controller('cadastroFamiliaCtrl', function($timeout, $scope, $mdDialog) {
    $scope.user = null;
    $scope.users = null;
    this.membros = ['Lucas','Diego'];

    $scope.loadUsers = function() {
        return $timeout(function() {
            $scope.users =  $scope.users  || [
                { id: 1, name: 'Scooby Doo' },
                { id: 2, name: 'Shaggy Rodgers' },
                { id: 3, name: 'Fred Jones' },
                { id: 4, name: 'Daphne Blake' },
                { id: 5, name: 'Velma Dinkley' }
            ];
        }, 650);
    };

});