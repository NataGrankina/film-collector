(function() {
    'use strict';

    angular
    .module('filmCollector')
    .factory('localFilmService', ['$localStorage', 'fstoFilmService', '$rootScope', 'lodash', service]);
    function service($localStorage, fstoFilmService, $rootScope, _) {
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

        function getFilmDetails(link) {
            return fstoFilmService.getFilm(link)
                .then(function(response) {
                    var film = getFilm(link);
                    film.details = response;
                    return film.details;
                });
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

        function moveFilm(link, switchList) {
            var film = getFilm(link);
            remove(link);

            if (switchList) film.isViewed = !film.isViewed;

            $localStorage.films.unshift(film);

            notifyFilmCollectionChanged();
        }

        function getFilm(link) {
            return _.find($localStorage.films, function(film) {
                return film.link === link;
            });
        }

    	return {
            getFilmDetails: getFilmDetails,
    		addToWatchList: addToWatchList,
            getWatchList: getWatchList,
            getViewedList: getViewedList,
            remove: remove,
            moveFilm: moveFilm
    	};
    }
})();
 