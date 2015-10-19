(function() {
  'use strict';

  angular
    .module('filmCollector')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
