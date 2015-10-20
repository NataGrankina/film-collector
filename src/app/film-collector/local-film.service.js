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
    		$localStorage.films.unshift(film);

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

        function moveFilm(link, newIndexInList, switchList) {
            var film = _.find($localStorage.films, function(item) {
                return item.link === link;
            });

            remove(link);

            if (switchList) film.isViewed = !film.isViewed;

            if (!newIndexInList) $localStorage.films.unshift(film);
            else {
                var filmList = _.filter($localStorage.films, function(item) {
                    return item.isViewed === film.isViewed;
                });

                var newIndex = _.indexOf($localStorage.films, filmList[newIndexInList - 1]) + 1;
                $localStorage.films.splice(newIndex, 0, film);
            }

            notifyFilmCollectionChanged();
        }

    	return {
    		addToWatchList: addToWatchList,
            getWatchList: getWatchList,
            getViewedList: getViewedList,
            remove: remove,
            moveFilm: moveFilm
    	};
    }
})();
 