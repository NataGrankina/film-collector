angular
	.module('filmCollector')
	.directive('fcSearchFilms', directive);

	function directive() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'app/film-collector/search/search-films.html',
			controller: 'searchFilmsController',
			controllerAs: 'vm',
			bindToController: true
		};
	}