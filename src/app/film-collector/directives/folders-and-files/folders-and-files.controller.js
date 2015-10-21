 (function() {
    'use strict';

   angular
      .module('filmCollector')
      .controller('foldersAndFilesController', ['fstoFilmProvider', controller]);

   function controller(fstoFilmProvider) {
      var vm = angular.extend(this, { 
        toggle: toggle,
        isExpanded: false,
        treeOptions: {
          isLeaf: function(node) {
             return node.type === 'file';
          },
          dirSelectable: false
        }
      });

      function toggle(node) {   
        if (node && node.type === 'file')
          return;

        if (!node) vm.isExpanded = !vm.isExpanded;
        
        var root = node || vm;
        if (!root.children) {
          fstoFilmProvider.getFoldersAndFiles(vm.filmLink, node ? node.id : 0)
            .then(function(response) {
              root.children = response;
            });
        }
      }
  }
})();