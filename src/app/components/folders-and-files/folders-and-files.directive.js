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
			templateUrl: 'app/components/folders-and-files/folders-and-files.html',
			controller: 'foldersAndFilesController',
			controllerAs: 'vm',
			bindToController: true
		};
	}
})();