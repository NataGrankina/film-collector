(function() {
    'use strict';

	angular
		.module('filmCollector')
		.directive('fcFoldersAndFiles', directive);

	function directive() {
		return {
			restrict: 'E',
			scope: {
				filmLink: '='
			},
			templateUrl: 'app/film-collector/directives/folders-and-files/folders-and-files.html',
			controller: 'foldersAndFilesController',
			controllerAs: 'vm',
			bindToController: true
		};
	}
})();