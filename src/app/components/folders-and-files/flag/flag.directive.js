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
			templateUrl: 'app/components/folders-and-files/flag/flag.html'
		};
	}
})();