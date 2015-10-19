angular
	.module('filmCollector')
	.directive('fcWatchList', directive);

	function directive() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'app/film-collector/watch-list/watch-list.html',
			controller: 'watchListController',
			controllerAs: 'vm',
			bindToController: true
		};
	}