 angular
    .module('filmCollector')
    .controller('viewedListController', ['localFilmService', '$scope', controller]);

 function controller(localFilmService, $scope) {
    var vm = angular.extend(this, { 
      viewedList: localFilmService.getViewedList()
    });
    
    $scope.$on('films.update', function(event) {
      vm.viewedList = localFilmService.getViewedList();
   });  
}