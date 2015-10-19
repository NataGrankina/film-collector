(function() {
    'use strict';

    angular
    .module('filmCollector')
    .factory('localFilmService', ['$localStorage', '$rootScope', 'lodash', service]);
    function service($localStorage, $rootScope, _) {
        $localStorage.films = $localStorage.films || [];

        function notifyFilmCollectionChanged() {
            $rootScope.$broadcast('films.update');
        }

    	function addToWatchList(film) {
            if (_.some($localStorage.films, { link: film.link })) return false;

            film.isViewed = false;
    		$localStorage.films.push(film);

            notifyFilmCollectionChanged();
            return true;
    	}

        function getWatchList() {
            return _.filter($localStorage.films, function(film) {
                return !film.isViewed;
            });
        }

        function getViewedList() {
            return _.filter($localStorage.films, function(film) {
                return film.isViewed;
            });
        }

        function remove(link) {
            _.remove($localStorage.films, function(film) {
                return film.link === link;
            });

            notifyFilmCollectionChanged();
        }

        function switchList(link) {
            var film = _.find($localStorage.films, function(item) {
                return item.link === link;
            });
            film.isViewed = !film.isViewed;

            notifyFilmCollectionChanged();
        }

    	return {
    		addToWatchList: addToWatchList,
            getWatchList: getWatchList,
            getViewedList: getViewedList,
            remove: remove,
            switchList: switchList
    	};
    }
})();
 