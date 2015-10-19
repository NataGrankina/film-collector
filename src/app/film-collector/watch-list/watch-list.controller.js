 angular
    .module('filmCollector')
    .controller('watchListController', ['localFilmService', '$scope', controller]);

 function controller(localFilmService, $scope) {
    var vm = angular.extend(this, { 
      watchList: localFilmService.getWatchList()
    });
    
    $scope.$on('films.update', function(event) {
      vm.watchList = localFilmService.getWatchList();
   	});
}