var mercadoApp= angular.module('MercadoApp', ['ngMaterial', 'ngMessages'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('grey');
})

.controller('IndexCtrl', function($scope) {
    $scope.clicked = function (index) {
        $scope.template = $scope.templates[index];
    };

    $scope.templates = [{
    name: 'inicio',
    url: 'inicio'
    }, {
    name: 'produtos',
    url: 'produtos'
    }, {
    name: 'familias',
    url: 'familias'
    }, {
    name: 'relatorioProdutos',
    url: 'relatorioProdutos'
    }, {
    name: 'relatorioFamilias',
    url: 'relatorioFamilias'
    }, {
    name: 'cadastroFamilia',
    url: 'cadastroFamilia'
    }];
  $scope.template = $scope.templates[0];

});
