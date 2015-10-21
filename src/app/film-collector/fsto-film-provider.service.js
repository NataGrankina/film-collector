(function() {
    'use strict';

    angular
        .module('filmCollector')
        .factory('fstoFilmProvider', ['$http', 'htmlParser', 'lodash', service]);   
        function service($http, htmlParser, _) {
            var searchUrlTemplate = _.template('http://localhost:3000/search.aspx?f=quick_search&search=<%=searchText%>&section=video&subsection=serials');
            var foldersUrlTemplate = _.template('http://localhost:3000<%=filmLink%>?ajax&id=<%=id%>&download=1&view=1&view_embed=0&blocked=0&frame_hash=1fl404m&folder_quality=null&folder_lang=null&folder_translate=null&folder=<%=parentFolderId%>');

        	function get(searchText) {
        		var url = searchUrlTemplate({ 'searchText': searchText });
    			return $http.get(url)
    				.then(function(response) {
    					return _.filter(response.data, function(film) {
                            return film.section === 'video';
                        });
    				});
        	}

            function getFoldersAndFiles(filmLink, parentFolderId) {
                var id = retrieveId(filmLink);
                var url = foldersUrlTemplate({
                    'filmLink': filmLink,
                    'id': id,
                    'parentFolderId': parentFolderId
                });

                return $http.get(url)
                    .then(function(response) {
                        return htmlParser.retrieveFoldersAndFiles(response.data);                        
                    });
            }

            function retrieveId(link) {
                var regex = /\/[a-zA-Z0-9]+-/;
                var match = regex.exec(link)[0];
                return match.substring(1, match.length -1);
            }

        	return {
        		get: get,
                getFoldersAndFiles: getFoldersAndFiles
        	};
        }
})();