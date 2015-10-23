(function() {
    'use strict';

	angular
		.module('filmCollector')
		.directive('fcFilmItemDetails', directive);

	function directive() {
		return {
			restrict: 'E',
			scope: {
				film: '='
			},
			templateUrl: 'app/components/film-item-details/film-item-details.html'
		};
	}
})();