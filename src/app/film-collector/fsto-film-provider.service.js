(function() {
    'use strict';

    angular
        .module('filmCollector')
        .factory('fstoFilmProvider', ['$http', 'lodash', service]);
        function service($http, _) {
        	function get(searchText) {
        		var url = 'http://localhost:3000/search.aspx?f=quick_search&search=' + searchText + '&section=video&subsection=serials';
    			return $http.get(url)
    				.then(function(response) {
    					return _.filter(response.data, function(film) {
                            return film.section === 'video';
                        });
    				});
        	}

        	return {
        		get: get
        	};
        }
})();