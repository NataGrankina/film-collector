angular
	.module('filmCollector')
	.directive('fcFilmItem', directive);

	function directive() {
		return {
			restrict: 'E',
			scope: {
				film: '='
			},
			templateUrl: 'app/film-collector/directives/film-item/film-item.html'
		};
	}