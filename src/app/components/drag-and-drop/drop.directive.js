angular.module('filmCollector')
  .directive('fcDrop', ['$document', directive]);
  
function directive($document) {
  function link(scope, element, attrs) {
    element.on('dragover', function(event) {
      event = event.originalEvent || event;
      event.stopPropagation();
      event.preventDefault();
    });

    var dragCounter = 0;

    element.on('dragenter', function(event) {  
        event.stopPropagation();
        event.preventDefault();

        element.addClass('drag-over');
        dragCounter++;        
    });

    element.on('dragleave', function(event) {
      event.stopPropagation();
      event.preventDefault();

      dragCounter--;
      if (dragCounter === 0) {
        element.removeClass('drag-over');
      }      
    });

    element.on('drop', function(event) {
      event = event.originalEvent || event;
      event.stopPropagation(); 
      
      dragCounter = 0;
      element.removeClass('drag-over');

      var transferedObject = JSON.parse(event.dataTransfer.getData('transferedObject'));

      if (attrs.fcDrop) {
        scope.$eval(attrs.fcDrop, {
          item: transferedObject,
          event: event
        });
      }
      else {
        element.append(event.dataTransfer.getData('text/html'));
      }
    });
  }

  return {
    link: link      
  };
}