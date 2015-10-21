(function() {
    'use strict';

	angular
		.module('filmCollector')
		.directive('fcFlag', directive);

	function directive() {
		return {
			restrict: 'E',
			scope: {
				language: '='
			},
			templateUrl: 'app/film-collector/directives/folders-and-files/flag/flag.html'
		};
	}
})();