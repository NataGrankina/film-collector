(function() {
    'use strict';

	angular
		.module('filmCollector')
		.directive('fcFilmCollection', directive);

	function directive() {
		return {
			restrict: 'E',
			scope: {
				filmCollection: '='
			},
			templateUrl: 'app/components/film-collection/film-collection.html',
			controller: 'filmCollectionControler',
			controllerAs: 'vm',
			bindToController: true
		};
	}
})();