(function() {
    'use strict';

	angular
		.module('filmCollector')
		.directive('fcTreeNode', directive);

	function directive() {
		return {
			restrict: 'E',
			scope: {
				node: '='
			},
			templateUrl: 'app/components/folders-and-files/tree-node/tree-node.html'
		};
	}
})();