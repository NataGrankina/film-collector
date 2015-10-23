 (function() {
    'use strict';

   angular
      .module('filmCollector')
      .controller('searchFilmsController', ['fstoFilmProvider', 'localFilmService', controller]);

    function controller(fstoFilmProvider, localFilmService) {

      var vm = angular.extend(this, { 
        searchText: '',
        searchFilms: searchFilms,
        searchResults: [],
        addToWatchList: addToWatchList,
        clearSearch: clearSearch
      });

      function searchFilms() {
        if (!vm.searchText) {
          vm.searchResults = [];
          return;
        }
        
        fstoFilmProvider.get(vm.searchText)
          .then(function(response) {
            vm.searchResults = response;
          });
      }

      function addToWatchList(film) {
        var isSuccess = localFilmService.addToWatchList(film);
        clearSearch();
        if (isSuccess) {
          toastr.success("Film \"" + film.title + "\" has been successfully added to your watch list", "Success");
        }
        else {
          toastr.warning("Film \"" + film.title + "\" was already added...", "Warning");
        }
      }

      function clearSearch() {
        vm.searchText = '';
        vm.searchResults = [];
      }    
    }
})();