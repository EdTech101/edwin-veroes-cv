'use strict';
(function() {
  app.directive('domReplacer', domReplacer);

  domReplacer.$inject = ['$interval', 'dateFilter'];

  function domReplacer($interval, dateFilter) {
    function link(scope, element, attrs) {
      var timeoutId;
      var parcedBool = function() {
        switch (attrs.show) {
          case "true":
            return true;
            break;
          case "false":
            return false;
            break;
          case false:
            return false;
            break;
          case true:
            return true;
            break;
        }
      };

      function updateDOM() {
        if (parcedBool()) {
           $interval(function() {
             element.css({
               display: 'inline-block',
             });
          }, 2000, 1, true, null);

       $interval(function() {
            element.css({
              opacity: 1
            });
          }, 2500, 1, true, null);
        } else {
          element.css({
            opacity: 0
          });
           $interval(function() {
            element.css({
              display: 'none'
            });
          }, 2000, 1, true, null);
        }
        attrs.show = !parcedBool(attrs.show);
      }

      element.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });

      // start the UI update process; save the timeoutId for canceling
      timeoutId = $interval(function() {
        updateDOM();
      }, 10000);
      updateDOM();
    };

    return {
      restrict: 'A',
      link: link
    }
  };
})();
