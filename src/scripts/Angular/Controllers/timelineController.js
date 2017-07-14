'use strict';
(function() {
  angular.module('myApp')
    .controller('timelineCtrl', timelineCtrl);

  timelineCtrl.$inject = [];

  function timelineCtrl() {
    var self = this;
    self.certificates = [{
        "title": "timeline.bachelor.title",
        "date": "timeline.bachelor.date",
        "duration": "timeline.bachelor.duration",
        "description": "timeline.bachelor.description",
        "tags": [""]
      },
      {
        "title": "timeline.weDev.title",
        "date": "timeline.weDev.date",
        "duration": "timeline.weDev.duration",
        "description": "timeline.weDev.description",
        "tags": [""]
      }
    ];
  }
})();
