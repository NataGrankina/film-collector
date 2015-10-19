(function() {
  'use strict';

  angular
    .module('filmCollector')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/film-collector/film-collector.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
