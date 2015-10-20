(function() {
    'use strict';

	angular
		.module('filmCollector')
		.directive('fcViewedList', directive);

		function directive() {
			return {
				restrict: 'E',
				scope: {},
				templateUrl: 'app/film-collector/viewed-list/viewed-list.html',
				controller: 'viewedListController',
				controllerAs: 'vm',
				bindToController: true
			};
		}
})();