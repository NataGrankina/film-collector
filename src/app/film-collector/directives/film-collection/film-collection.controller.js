 (function() {
    'use strict';

   angular
      .module('filmCollector')
      .controller('filmCollectionControler', ['localFilmService', 'lodash', controller]);

   function controller(localFilmService, _) {
      var vm = angular.extend(this, { 
        removeFilm: removeFilm,
        switchList: switchList,
        dropFilm: dropFilm
      });

     	function removeFilm(film) {
     		localFilmService.remove(film.link);
     	}

      function switchList(link) {
        localFilmService.moveFilm(link, 0, true);
      }

      function dropFilm(link, index) {
        var film = _.find(vm.filmCollection, function(item) {
            return item.link === link;
        });

        if (film && _.indexOf(vm.filmCollection, film) < index) index--;

        localFilmService.moveFilm(link, index, !film);
      }
  }
})();