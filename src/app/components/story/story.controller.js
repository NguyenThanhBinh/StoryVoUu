(function() {
    'use strict';

    angular
    .module('app')
    .controller('StoryController', StoryController);

    /* @ngInject */
    function StoryController(storySvc, $state) {
        var vm = this;
        vm.MessageError = null;
        vm.story = {};
        vm.storyID = $stateParams.id;
        vm.currentPage = 1;
        vm.itemsPerPage = 20;
        vm.maxSize = 5;
        vm.getStoryByID = function() {
            storySvc.getStoryByID(vm.storyID).then(function(response) { // success callback
                if (response.Status === 'Success') {
                    vm.story = response.Data[0];
                } else {
                    vm.MessageError = response.Data;
                }
            }, function(rejectParam) { // error callback with reason
                vm.MessageError = rejectParam.message;
            });
        };

        vm.getListChapterByStoryID = function() {
            storySvc.getListChapterByStoryID(vm.storyID).then(function(response) { // success callback
                if (response.Status === 'Success') {
                    vm.chapters = response.Data;
                    vm.totalItems = response.Data.length;
                } else {
                    vm.MessageError = response.Data;
                }
            }, function(rejectParam) { // error callback with reason
                vm.MessageError = rejectParam.message;
            });
        };

        vm.initData = function()  {
            vm.getStoryByID();
            vm.getListChapterByStoryID();
        }

        vm.initData();

        vm.gotoStoryDetail = function(id) {
            $state.go('home.storydetail', {
                id: id
            }, {
                reload: true
            });
        };
    }

})();
