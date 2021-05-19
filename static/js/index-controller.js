var mercadoApp= angular.module('MercadoApp', ['ngMaterial', 'ngMessages'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('amazingDarkPaletteName', {
    '50': '33bfce',
    '100': '33bfce',
    '200': '33bfce',
    '300': '33bfce',
    '500': '33bfce',
    '400': '33bfce',
    '600': '33bfce',
    '800': '33bfce',
    '700': '33bfce',
    '900': '33bfce',
    'A100': '33bfce',
    'A200': '33bfce',
    'A400': '33bfce',
    'A700': '33bfce',

    'contrastDefaultColor': 'light',
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('amazingDarkPaletteName')
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

mercadoApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('//');
    $interpolateProvider.endSymbol('//');
});
