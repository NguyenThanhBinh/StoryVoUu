(function() {
    'use strict';

    angular
    .module('app')
    .controller('StoryDetailController', StoryDetailController);

    /* @ngInject */
    function StoryDetailController(storyDetailSvc, $state) {
        var vm = this;
        vm.MessageError = null;
        vm.chapterDetails = {};
        vm.storyDetailID = $stateParams.id;
        vm.getChapter = function() {
            storyDetailSvc.getChapter(vm.storyDetailID).then(function(response) { // success callback
                // vm.story = response;
                if (response.Status === 'Success') {
                    vm.chapterDetails = response.Data[0];
                } else {
                    vm.MessageError = response.Data;
                }
            }, function(rejectParam) { // error callback with reason
                vm.MessageError = rejectParam.message;
            });
        };

        vm.getChapter();
    }

})();
