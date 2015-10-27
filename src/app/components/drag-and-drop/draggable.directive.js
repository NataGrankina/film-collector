angular.module('filmCollector')
  .directive('fcDraggable', ['$timeout', directive]);
  
function directive($timeout) {
  function link(scope, element, attrs) {
    element.attr('draggable', true);   
    
    element.on('dragstart', function(event) {
      event = event.originalEvent || event;
      event.dataTransfer.effectAllowed = attrs.fcEffectAllowed;
      event.dataTransfer.setData('text/html', element.clone().wrap('<p>').parent().html());
      var transferedObject = scope.$eval(attrs.fcDraggable);
      event.dataTransfer.setData('transferedObject', JSON.stringify(transferedObject));

      $timeout(function() { element.addClass("dragging-source"); }, 0);
    });

    element.on('dragend', function(event) {
      event = event.originalEvent || event;
      event.stopPropagation();

      $timeout(function() { element.removeClass("dragging-source"); }, 0);
    });
  }

  return {
    link: link      
  };
}