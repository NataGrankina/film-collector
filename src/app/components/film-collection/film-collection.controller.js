 (function() {
    'use strict';

   angular
      .module('filmCollector')
      .controller('filmCollectionControler', ['localFilmService', 'lodash', controller]);

   function controller(localFilmService, _) {
      var vm = angular.extend(this, { 
        selectedFilm: null,
        removeFilm: removeFilm,
        switchList: switchList,
        dropFilm: dropFilm,
        selectFilm: selectFilm
      });

     	function removeFilm(film) {
     		localFilmService.remove(film.link);
     	}

      function switchList(link) {
        localFilmService.moveFilm(link, true);
      }

      function dropFilm(link) {
        var film = _.find(vm.filmCollection, function(item) {
            return item.link === link;
        });

        localFilmService.moveFilm(link, !film);
      }

      function selectFilm(film) {
        vm.selectedFilm = film;
        if (!film.details) {
          localFilmService.getFilmDetails(film.link)
            .then(function(response) {
                film.details = response;
            });
        }
      }
  }
})();