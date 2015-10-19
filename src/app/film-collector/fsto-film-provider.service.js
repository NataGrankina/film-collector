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



 //    http://inv-nets.admixer.net/fs/br.aspx?issp=1&ce=1&pvId=1445186500917&zones=3e760dcd-602b-44c2-ba47-a8381118543d|admixer_async_1406853093|1|labels{%22ct%22:%22adult%22}&ref=e947d36a-13b9-49a8-9b9d-dfb9e24d88a2&callback=callback_json6
 //    http://inv-nets.admixer.net/fs/br.aspx?issp=1&ce=1&pvId=1445240772946&zones=3e760dcd-602b-44c2-ba47-a8381118543d|admixer_async_1406853093|1|labels{%22ct%22:%22adult%22}&ref=a9e2cb90-069c-b709-1daf-cd8de8c0bb0c&callback=callback_json6
 //    http://inv-nets.admixer.net/fs/br.aspx?issp=1&ce=1&pvId=1445240773377&zones=3e760dcd-602b-44c2-ba47-a8381118543d|admixer_async_1406853093|1|labels{%22ct%22:%22adult%22}&ref=a53c6e65-3adb-4a79-262f-56af23b360c3&callback=callback_json7
 // 