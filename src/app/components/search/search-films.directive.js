(function() {
    'use strict';

	angular
		.module('filmCollector')
		.directive('fcSearchFilms', directive);

	function directive() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'app/components/search/search-films.html',
			controller: 'searchFilmsController',
			controllerAs: 'vm',
			bindToController: true
		};
	}
})();