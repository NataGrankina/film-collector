 angular
    .module('filmCollector')
    .controller('filmCollectionControler', ['localFilmService', controller]);

 function controller(localFilmService) {
    var vm = angular.extend(this, { 
      removeFilm: removeFilm,
      switchList: switchList
    });

   	function removeFilm(film) {
   		localFilmService.remove(film.link);
   	}

    function switchList(film) {
      localFilmService.switchList(film.link);
    }
}