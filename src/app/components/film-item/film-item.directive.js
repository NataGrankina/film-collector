(function() {
    'use strict';

	angular
		.module('filmCollector')
		.directive('fcFilmItem', directive);

	function directive() {
		return {
			restrict: 'E',
			scope: {
				film: '='
			},
			templateUrl: 'app/components/film-item/film-item.html'
		};
	}
})();